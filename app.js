/* grab necessary elements */
const form = document.querySelector('.form');
const timeInput = document.querySelector('timerSelect');
const format = document.querySelector('.set-btn');
const countDown = document.querySelector('.countdown');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');
/* grab necessary elements ends */ 


/* global variables and constants*/
let countDownInterval;
let secondsLeftms;
let endTime;
let stopBtnClicked = false;
/* global variables ends */


/* .stop-btn click listener */
stopBtn.addEventListener('click', () => {
    stopBtnClicked = !stopBtnClicked;

    if (stopBtnClicked === true) {
        stopBtn.innerHTML = 'Play';
        resetBtn.disabled = false;
        clearInterval(countDownInterval);
    } else if (stopBtnClicked === false) {
        stopBtn.innerHTML = 'STOP';
        resetBtn.disabled = true;
        endTime = secondsLeftms + Date.now();
        countDownInterval = setInterval(() => {
            setCountDown(endTime);
        }, 1000);
    }
});
/* .stop-btn click listener ends */


/* .reset-btn click listener */
resetBtn.addEventListener('click', () => {
    resetCountDown();
});
/* .reset-btn click listener ends */


/* .form submit listener */
form.addEventListener('submit', (event) => {
    // prevent the default page reloading
    event.preventDefault();
  
    // get the countdown time user typed
    let countDownTime = timeInput.value;
  
    // check if it is not zero
    if (countDownTime > 0) {
      {// 1 minute = 60000 ms (4 zeros)
        countDownTime = countDownTime * 60000;
      } 
  
      // get current time in milliseconds
      const now = Date.now();
      // calculate the ending time
      endTime = now + countDownTime;
  
      // activate the countdown at first
      setCountDown(endTime);
  
      countDownInterval = setInterval(() => {
        setCountDown(endTime);
      }, 1000);
  
      // then disable the .set-btn
      setBtn.disabled = true;
      // then enable the .stop-btn
      stopBtn.disabled = false;
    }
  
  });
/* .form submit listener ends */


/* setCountDown function */
const setCountDown = (endTime) => {
    secondsLeftms = endTime -Date.now();
    const secondsLeft = Math.round(secondsLeftms / 1000);

    let minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    if (secondsLeft < 0) {
        resetCountDown();
        return;
    }

    countDown.innerHTML = `${minutes} : ${seconds}`;

};
/* setCountDown function ends */


/* resetCountDown function */
const resetCountDown = (endTime) => {
    clearInterval(countDownInterval);
    countDown.innerHTML = '00 : 00';
    stopBtnClicked = false;
    stopBtn.innerHTML = 'STOP';

    setBtn.disabled = false;

    stopBtn.disabled = true;
    resetBtn.disabled = true;
}
/* resetCountDown function ends */