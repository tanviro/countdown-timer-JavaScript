const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');



const updateCountDown = (deadline) =>{
    const currentTime = new Date();
    timeDifference = deadline - currentTime; // milliseconds

    //Calculate days, hours, minutes and seconds from timeDifference
    let calSecs = Math.floor(timeDifference/1000) % 60;
    let calMins = Math.floor(timeDifference/1000/60) % 60;
    let calHours = Math.floor(timeDifference/1000/60/60) % 24;
    let calDays = Math.floor(timeDifference/1000/60/60/24);
    
    const formatTime = (time) =>{
        return time < 10 ? `0${time}` : time;
    }

    days.textContent = formatTime(calDays);
    hours.textContent = formatTime(calHours);
    mins.textContent = formatTime(calMins);
    secs.textContent = formatTime(calSecs);

    
} 
const countDown = (targetDate) =>{
    setInterval(() => updateCountDown(targetDate), 1000);
}

const targetDate = new Date("December 23 2024 22:51");
countDown(targetDate);
