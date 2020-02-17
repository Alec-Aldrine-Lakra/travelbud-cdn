$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    // $('.modal').modal();
});

let slideIndex = 0, flag=0;
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
        showSlides();
        // newsletter();
    }, 2000);
})

// const newsletter = ()=>{
//     setTimeout(()=>{
//         $('.modal').modal('open');
//     },16000);
// }

// document.getElementById('newsletter').addEventListener('submit',(e)=>{
//     e.preventDefault();
//     let em = document.getElementById('subs_email').value;
//     alert(em);
//     document.getElementById('subs_email').value="";
// })

const showSlides = ()=>{
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3500); // Change image every 5 seconds
}
