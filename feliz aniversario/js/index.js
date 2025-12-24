const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const targetDate = new Date('December 25 2025 00:00:00').getTime();

function timer(){
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60/ 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60 ) % 60;
    const seconds = Math.floor(distance / 1000 ) % 60;

    console.log(days + ":" + hours + ":" + minutes + ":" + seconds)

    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
    
    if(distance < 0){
        clearInterval(x);
             

        day.innerHTML = "0";
        hour.innerHTML = "0";
        minute.innerHTML = "0";
        second.innerHTML = "0";
        document.getElementById("hero").style.display = "none";
        document.querySelector(".newYear").style.display = "block";
        return;
    }
}


timer();


const x = setInterval(timer, 1000);

// setInterval(timer, 1000)
