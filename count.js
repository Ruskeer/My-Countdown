const day = document.getElementById('days');
const hour = document.getElementById('hours');
const minute = document.getElementById('minutes');
const second = document.getElementById('seconds');


const targetDate = new Date("September 29 2026 00:00:00").getTime();

function timer() {
    const currentDate = new Date().getTime();
    const distanceDate = targetDate - currentDate;

    const days = Math.floor(distanceDate / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distanceDate / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distanceDate / 1000 / 60) % 60;
    const seconds = Math.floor(distanceDate / 1000) % 60;



    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;


}


setInterval(timer, 1000);