'use strict';
$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyC9I7GJNxSE9Mh-IjByQdxKKxJaFygb8oU&callback=myMap");
});

window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        document.querySelector('#preloader').classList.add("invisible");
        document.querySelector('header').classList.remove("invisible");
    }, 2000);

    const shortMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dt = document.querySelectorAll('.date');
    for(let i=0; i< dt.length; i++){
        dt[i].innerHTML = shortMonth[new Date(dt[i].innerHTML).getMonth()]+" " + new Date(dt[i].innerHTML).getDate()+", "+ new Date(dt[i].innerHTML).getFullYear();
    }
})

document.getElementById('details').addEventListener('submit',(e)=>{
    e.preventDefault();
    const em = document.getElementById('email').value.trim();
    const name = document.getElementById('name').value.trim();
    const content =  document.getElementById('content').value.trim();

    if(em!=='' && name!=='' && content!==''){
        showLoader();
        const body = {
            'email': em,
            'name': name,
            'content': content
        }
        let header = new Headers();
        header.append('Content-Type','application/json');
    
        let initObject = {
            method: 'POST',
            headers: header,
            mode: 'cors',
            body: JSON.stringify(body)
        }
    
        fetch('/contact-us', initObject).then(res=>{
            if(res.ok){
                return res.json();
            }
        }).then(res =>{
            stopLoader();
            if(res.message=="Inserted"){
                M.toast({html: 'Message Sent Successfully, We will get back to you in no time &#128516;'});
            } else {
                 M.toast({html: 'Please fill all the fields &#128534; and try after some time'});  
            }
        }).catch(err=>{
            stopLoader();
            M.toast({html: 'Server error, please try after some time &#128534;'});
        })
    } else {
        M.toast({html: 'Please Fill all the fields &#128530;'});
    }
})

function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(22.5726, 88.3639),
        zoom:12,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

function showLoader(){
    document.getElementById("subButton").disabled = true;
    document.getElementById("pageloader").style.display="block";
}

function stopLoader(){
    document.getElementById("pageloader").style.display = "none";
    document.getElementById("subButton").disabled = false;
    document.getElementsByTagName('form')[0].reset();
}