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