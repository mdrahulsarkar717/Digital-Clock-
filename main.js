let hour = document.querySelector('.hour');
let minit = document.querySelector('.min');
let sec = document.querySelector('.sec');

setInterval(() => {
    let currentTime = new Date();
    hour.innerHTML = 
    (currentTime.getHours < 10 ? "0" : "")
    + currentTime.getHours();
    
 minit.innerHTML = 
    (currentTime.getMinutes < 10 ? "0" : "")
    + currentTime.getMinutes();
    
 sec.innerHTML =
    (currentTime.getSeconds < 10 ? "0" : "")
    + currentTime.getSeconds();
    
    
}, 1000);