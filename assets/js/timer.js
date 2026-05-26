const timer = document.getElementById('time');
const start = document.getElementById('start-timer');
const startTxt = document.getElementById('starttxt');

let timerIn = null; 
let mins = 15;
let secs = 0;

start.addEventListener('click', toggleTimer);

function toggleTimer() {
    if (timerIn !== null) {
        stopTimer();
        return;
    }


    startTxt.innerText = 'Stop';

    timerIn = setInterval(() => {
        if (secs <= 0) {
            if (mins > 0) {
                mins--;
                secs = 59;
            } else {
                alert("15 minutes have passed");
                stopTimer();
                return;
            }
        } else {
            secs--;
        }

        timer.innerText = `${mins}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerIn);
    timerIn = null;
    mins = 15;
    secs = 0;
    timer.innerText = `15:00`;
    startTxt.innerText = 'Start';
}
