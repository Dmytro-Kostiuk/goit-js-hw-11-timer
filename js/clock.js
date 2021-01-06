const ref={
    daysRef: document.querySelector('[data-value="days"]'),
    hoursRef: document.querySelector('[data-value="hours"]'),
    minsRef: document.querySelector('[data-value="mins"]'),
    secsRef: document.querySelector('[data-value="secs"]'),
    
}



function timer() {
    
    const date = new Date(2021, 1, 5);

    const targetDate = date.getTime();
    setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = targetDate - currentTime;
        // console.log(deltaTime);
        updateClock(deltaTime);
    }, 1000);
}


function updateClock(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    ref.daysRef.textContent = days;

    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    ref.hoursRef.textContent = hours;

    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    ref.minsRef.textContent = mins;

    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    ref.secsRef.textContent = secs;
//   console.log(`${days}:${hours}:${mins}:${secs}`)  
}

function pad(value) {
    return String(value).padStart(2, '0');
}

timer();



