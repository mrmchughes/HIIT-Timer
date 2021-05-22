/*Code based off of http://http://kellylougheed.com/blog/a-javascript-timer-for-hiit-workouts/*/
window.onload = function () {

  let seconds = 20;
  let rest = true;
  let interval;

  let intervalTime = 20;
  let breakTime = 10;

  let settingsButton = document.getElementById("settings");
  let intervalInput = document.getElementById("workingTime");
  let breakInput = document.getElementById("restTime");

  let startButton = document.getElementById("startButton");
  let pauseButton = document.getElementById("pauseButton")
  let resetButton = document.getElementById("resetButton");

  let statusDiv = document.getElementById("status");
  let secondsSpan = document.getElementById("sec");

  settingsButton.onclick = function() {
    intervalTime = Math.floor(intervalInput.value * 1);
    breakTime = Math.floor(breakInput.value * 1);
    reset();
  }

  startButton.onclick = function () {
    rest = false;
    changeToWork();
    interval = setInterval(countdownSeconds, 1000);
  }

  resetButton.onclick = function () {
    reset();
  }

  function reset() {
    clearInterval(interval);
    seconds = intervalTime;
    secondsSpan.innerText = seconds;
    rest = true;
    changeToRest();
  }

  pauseButton.onclick = function() {
    clearInterval(interval);
  }

  function countdownSeconds() {
    seconds -= 1;
    secondsSpan.innerText = seconds;
    checkForStateChange();
  }

  function checkForStateChange() {
    if (seconds == 0 && rest == false) {
      seconds = breakTime + 1;
      rest = true;
      changeToRest();
    } else if (seconds == 0 && rest == true) {
      seconds = intervalTime + 1;
      rest = false;
      changeToWork();
    }
  }

  function changeToRest() {
    $("body").css("background", "#87f5fb");
    statusDiv.innerText = "Rest Period";
    document.getElementById("cardImg").src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.PvRKtXc8nMb5F27zSVjp1AHaHa%26pid%3DApi&f=1';
  }

  function changeToWork() {
    $("body").css("background", "#de3c4b");
    statusDiv.innerText = "Push Yourself!";
    document.getElementById("cardImg").src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.KYnkGOLCF2UhXr3lLjkntAHaKI%26pid%3DApi&f=1';
  }
}

/*Changes to make: refactor JS*/