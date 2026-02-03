const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const targetDate = new Date('February 3 2026 22:10:00').getTime();
const messageDuration = 24 * 60 * 60 * 1000;
function timer(){
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;
    if(distance>0){
        const days = Math.floor(distance / 1000 / 60 / 60/ 24);
        const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
        const minutes = Math.floor(distance / 1000 / 60 ) % 60;
        const seconds = Math.floor(distance / 1000 ) % 60;
    
        // console.log(days + ":" + hours + ":" + minutes + ":" + seconds)
    
        day.innerHTML = days;
        hour.innerHTML = hours;
        minute.innerHTML = minutes;
        second.innerHTML = seconds;
    } 
    else {
        // já passou da data alvo
        const elapsed = Math.abs(distance);

        if (elapsed < messageDuration) {
            // mostrar mensagem durante 24h
            day.innerHTML = "0";
            hour.innerHTML = "0";
            minute.innerHTML = "0";
            second.innerHTML = "0";
            document.getElementById("hero").style.display = "none";
            document.querySelector(".newYear").style.display = "block";
        } else {
            // depois de 24h, reinicia para o próximo ano
            document.getElementById("hero").style.display = "block";
            document.querySelector(".newYear").style.display = "none";

            // define nova data (ano seguinte)
            const nextYear = new Date(targetDate).getFullYear() + 1;
            targetDate = new Date(`February 03 ${nextYear} 20:33:00`).getTime();
        }
    }
}


timer();


const x = setInterval(timer, 1000);

// setInterval(timer, 1000)




