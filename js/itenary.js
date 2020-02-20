$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.collapsible').collapsible();
    $('select').formSelect();
});

window.addEventListener('DOMContentLoaded',()=>{

    document.querySelector('#package-form').style.display = 'none';
    let d1, d2, minDate, maxDate;
    minDate = new Date();
    maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
    let [checkin] = document.querySelectorAll('.datepicker');
    let instance1 = M.Datepicker.init(checkin, {
        defaultDate: new Date(),
        minDate: minDate,
        maxDate: maxDate,
        onClose: ()=>{
            d1 = document.getElementById('checkin').value;
            if(d1!=="" && d1!==undefined){
                d1 = new Date(Date.parse(d1));
                d2 = new Date(d1);
                d2.setDate(d1.getDate()+1);
                document.getElementById('checkout').disabled = false;
                document.getElementById('checkout').classList.add('datepicker');
                let instance2 = M.Datepicker.init(document.getElementById('checkout'), {
                    defaultDate: d2,
                    minDate: d2,
                    maxDate: maxDate
                });
            }
        }
    });

    setTimeout(()=>{
        document.querySelector('#preloader').classList.add("invisible");
        document.querySelector('header').classList.remove("invisible");
    }, 2000);
})

document.querySelector('#book').addEventListener('click',(e)=>{
    e.stopPropagation();
    document.querySelector('#package-form').style.display = 'block';
    let top = document.querySelector('#package-form').offsetTop;
    window.scrollTo({
        top: top,
        behavior: "smooth"
    });
})

function handleRadio(ob){
    let p = document.querySelector('#people');
    switch(ob.value){

        case "solo" : p.value = 1;
                      p.max=1;
                      p.min=1;
                      break;

        case  "couple": p.value=2;
                        p.max=2;
                        p.min=2;
                        break;


        case  "group": p.value=2;
                       p.max=16;
                       p.min=2;
                       break;

        case "family": p.value=4;
                       p.max=16;
                       p.min=2;
                       break
    }
}

document.querySelector(".number").addEventListener("keypress", function (e) {
    e.stopPropagation();
    let a = document.querySelector(".number").value;
    if (a>10 || evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
        e.preventDefault();
});

document.querySelector("#phone").addEventListener("keypress", function (e) {
    e.stopPropagation();
    let a = document.querySelector("#phone").value;
    if (a>1000000000 || evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
        e.preventDefault();
});

document.getElementById('details').addEventListener('submit',(e)=>{
   e.preventDefault();
   e.stopPropagation();
   const name = document.getElementById('name').value.trim();
   const email = document.getElementById('email').value.trim();
   const checkin = document.getElementById('checkin').value.trim();
   const checkout = document.getElementById('checkout').value.trim();

   const d1 = new Date(checkin);
   const d2 = new Date(checkout);

   if(d1.getTime()>d2.getTime()){
        M.toast({html: 'Please select valid date & time &#128534;'});
        return;
   }

   const nationality = document.getElementById('nationality').value.trim();
   const content = document.getElementById('content').value.trim() || "";
   const nop = document.getElementById('people').value.trim();
   const phone = document.getElementById('phone').value.trim();
   const accom = document.getElementsByName('accomodation');
   let a,g;
   for(let i=0; i<accom.length; i++){
       if(accom[i].checked){
           a = accom[i].value;
           break;
       }
   }
   type = document.getElementsByName('group');
   for(let i=0; i<type.length; i++){
        if(type[i].checked){
            g = type[i].value;
            break;
        }
    }

    if(name!="" && email!="" && checkin!="" && checkout!="" && nationality!="" && nop!="" && phone!="" && a!="" && g!="") {
        const body = {
            'email': email,
            'name': name,
            'content': content,
            'checkin': checkin,
            'checkout': checkout,
            'phone': phone,
            'nop': nop,
            'nationality': nationality,
            'accomodation': a,
            'travel_type':g
        }
        let header = new Headers();
        header.append('Content-Type','application/json');
    
        let initObject = {
            method: 'POST',
            headers: header,
            mode: 'cors',
            body: JSON.stringify(body)
        }
    
        fetch('/freedom-pack', initObject).then(res=>{
            if(res.ok){
                return res.json();
            }
        }).then(res =>{
            if(res.message){
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

const shortMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dt = document.querySelectorAll('.date');
for(let i=0; i< d.length; i++){
    dt[i].innerHTML = shortMonth[new Date(d[i].innerHTML).getMonth()]+" " + new Date(d[i].innerHTML).getDate()+", "+ new Date(d[i].innerHTML).getFullYear()
}