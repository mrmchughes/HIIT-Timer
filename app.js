/*Code based off of http://http://kellylougheed.com/blog/a-javascript-timer-for-hiit-workouts/*/
window.onload = function () {

  var seconds = 20;
  var rest = true;
  var interval;

  var intervalTime = 20;
  var breakTime = 10;

  var settingsButton = document.getElementById("settings");
  var intervalInput = document.getElementById("workingTime");
  var breakInput = document.getElementById("restTime");

  var startButton = document.getElementById("startButton");
  var pauseButton = document.getElementById("pauseButton")
  var resetButton = document.getElementById("resetButton");

  var statusDiv = document.getElementById("status");
  var secondsSpan = document.getElementById("sec");

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
    $("body").css("background", "#86BBD8");
    statusDiv.innerText = "Rest Period";
  }

  function changeToWork() {
    $("body").css("background", "#F26419");
    statusDiv.innerText = "Push Yourself!";
  }
}