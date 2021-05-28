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
    document.getElementById("cardImg").src = 'https://i5.walmartimages.com/asr/43087261-7dab-4ca4-8c0a-4fa318edada2_2.b9b7e071ff921d1d78fdccb37316fcc7.jpeg';
  }

  function changeToWork() {
    $("body").css("background", "#de3c4b");
    statusDiv.innerText = "Push Yourself!";
    document.getElementById("cardImg").src = 'https://fitatmidlife.com/wp-content/uploads/AirBike-Elite-by-Precor-748x1024.jpg';
  }
}

/*Changes to make: refactor JS*/