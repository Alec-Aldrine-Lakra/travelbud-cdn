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
})

document.getElementById('details').addEventListener('submit',(e)=>{
    e.preventDefault();
    const em = document.getElementById('email').value.trim();
    const name = document.getElementById('name').value.trim();
    const content =  document.getElementById('content').value.trim();

    if(em!=='' && name!=='' && content!==''){
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
            if(res.message=="Inserted"){
                M.toast({html: 'Message Sent Successfully, We will get back to you in no time &#128516;'});
            } else {
                 M.toast({html: 'Please fill all the fields &#128534; and try after some time'});  
            }
        }).catch(err=>{
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

