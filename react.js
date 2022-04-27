// _______________________ TIME ______________________________
const hr = document.querySelector(".hr");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const am = document.querySelector(".am");

setInterval(() => {
    const d = new Date();
    console.log(d.getHours(), d.getMinutes(), d.getSeconds());
    hr.innerHTML = d.getHours();
    min.innerHTML = d.getMinutes();
    sec.innerHTML = d.getSeconds();
    if(hr.innerHTML>12){
        hr.innerHTML = hr.innerHTML -12;
        am.textContent = "PM";
    }

    if(sec.innerHTML<10){
        sec.innerHTML = "0" + sec.innerHTML;
    }

    if(min.innerHTML<10){
        min.innerHTML = "0" + min.innerHTML;
    }

    if(hr.innerHTML<10){
        hr.innerHTML = "0" + hr.innerHTML;
    }
}, 1000);


// _________________________ DATE __________________________________

const day  = document.querySelector(".day");
const month = document.querySelector(".month");
const num = document.querySelector(".num");
const year = document.querySelector(".year");

const date = new Date();

num.innerHTML = date.getDate();
year.innerHTML = date.getFullYear();

const array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const ani = date.getMonth();
month.innerHTML = array[ani];

const array2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const ag = date.getDay();
day.innerHTML = array2[ag];

