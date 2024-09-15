var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

function sendMail () {
    var params = {
        name : document.getElementById("name").value ,
        email : document.getElementById("email").value ,
        contact : document.getElementById("contact").value ,
        message : document.getElementById("message").value ,
    };

const serviceID = "service_fkwlr3h";
const templateID = "template_nups9th";

emailjs.send(serviceID,templateID, params).then((res) => {
    document.getElementById("name").value ="";
    document.getElementById("email").value ="";
    document.getElementById("contact").value ="";
    document.getElementById("message").value ="";
    console.log(res)
    alert("Your Message Sent Succesfully");
}).catch((err) =>{
    console.log(err)
})
}

document.addEventListener("DOMContentLoaded" , () => {
    document.getElementById("pic").addEventListener('click', () => {
        // alert("function called")
        document.querySelector(".div-1").style.display = 'block';
        document.querySelector(".div-2").style.display = 'none';
        document.querySelector(".div-3").style.display = 'none';
        document.querySelector(".div-4").style.display = 'none';

    })
    document.getElementById("motion").addEventListener('click', () => {
        // alert("function called")
        document.querySelector(".div-1").style.display = 'none';
        document.querySelector(".div-2").style.display = 'block';
        document.querySelector(".div-3").style.display = 'none';
        document.querySelector(".div-4").style.display = 'none';
    })
    document.getElementById("color").addEventListener('click', () => {
        // alert("function called")
        document.querySelector(".div-1").style.display = 'none';
        document.querySelector(".div-2").style.display = 'none';
        document.querySelector(".div-3").style.display = 'block';
        document.querySelector(".div-4").style.display = 'none';
    })
    document.getElementById("post").addEventListener('click', () => {
        // alert("function called")
        document.querySelector(".div-1").style.display = 'none';
        document.querySelector(".div-2").style.display = 'none';
        document.querySelector(".div-3").style.display = 'none';
        document.querySelector(".div-4").style.display = 'block';
    })  
})

