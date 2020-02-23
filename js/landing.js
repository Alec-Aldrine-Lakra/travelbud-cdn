'use strict';
$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.modal').modal();
});

let flag=0;
const metrics = document.getElementById('cinema');
const xtop = metrics.offsetTop;

window.addEventListener('scroll', (e)=>{
    let scrollPos = window.scrollY;
    if(scrollPos>=xtop-500 && flag===0)
        increment();
},{passive: true});


function increment(){
    const customers = 2000, distance = 60000;
    let i = parseInt(document.getElementById('cust_count').innerHTML);
    let k = parseInt(document.getElementById('dist_count').innerHTML);
    const s1 = setInterval(()=>{
        if(i<customers){
            i+=2;
            document.getElementById('cust_count').innerHTML = i;
        }
        else
        clearInterval(s1);
            
    },40);

    const s2 = setInterval(()=>{
        if(k<distance){
            k+=2;
            document.getElementById('dist_count').innerHTML = k;
        }
        else
        clearInterval(s2);
            
    },40);
    flag=1;
}

window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        document.querySelector('#preloader').classList.add("invisible");
        document.querySelector('header').classList.remove("invisible");
        showSlides(1,true);
        diyItenary();
    }, 2000);

    const shortMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dt = document.querySelectorAll('.date');
    for(let i=0; i< dt.length; i++){
        dt[i].innerHTML = shortMonth[new Date(dt[i].innerHTML).getMonth()]+" " + new Date(dt[i].innerHTML).getDate()+", "+ new Date(dt[i].innerHTML).getFullYear();
    }
})

const diyItenary = ()=>{
    setTimeout(()=>{
        $('.modal').modal('open');
        document.getElementById("modalImage").style.height = `${document.getElementById('modal1').clientHeight}px`;
    },17000);
}

// document.getElementById('newsletter').addEventListener('submit',(e)=>{
//     e.preventDefault();
//     let em = document.getElementById('subs_email').value;
//     alert(em);
//     document.getElementById('subs_email').value="";
// })
let slideIndex = 0, t;
const showSlides = (i, flag)=>{
    
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex+=i;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if(slideIndex == 0){
         slideIndex = 3;
    }
    slides[slideIndex-1].style.display = "block";
    if(flag){
       t = setTimeout(showSlides, 5000, 1, true); // Change image every 5 seconds
    } else {
        clearTimeout(t);
        t = setTimeout(showSlides, 5000, 1, true);
    }
}

  
let pageWidth = window.innerWidth || document.body.clientWidth;
let treshold = Math.max(1,Math.floor(0.01 * (pageWidth)));
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const limit = Math.tan(45 * 1.5 / 180 * Math.PI);
const gestureZone = document.getElementById('swipe');

gestureZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture(event);
}, false);

function handleGesture(e) {
    let x = touchendX - touchstartX;
    let y = touchendY - touchstartY;
    let xy = Math.abs(x / y);
    let yx = Math.abs(y / x);
    if (Math.abs(x) > treshold || Math.abs(y) > treshold) {
        if (yx <= limit) {
            if (x < 0) {
                showSlides(-1, false);
            } else {
                showSlides(1, false);
                // console.log("right");
            }
        }
        if (xy <= limit) {
            if (y < 0) {
                // console.log("top");
            } else {
                // console.log("bottom");
            }
        }
    } else {
        // console.log("tap");
    }
}
