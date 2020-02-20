$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
    $('.your-class').slick({
        dots: true,
        centerMode: true,
        infinite: true,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        mobileFirst: true
    });
});
window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        document.querySelector('#preloader').classList.add("invisible");
        document.querySelector('header').classList.remove("invisible");
    }, 2000);
})

const shortMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dt = document.querySelectorAll('.date');
for(let i=0; i< d.length; i++){
    dt[i].innerHTML = shortMonth[new Date(d[i].innerHTML).getMonth()]+" " + new Date(d[i].innerHTML).getDate()+", "+ new Date(d[i].innerHTML).getFullYear()
}