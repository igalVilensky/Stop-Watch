var seconds = 00;
var tens = 00;
var appendTens = document.querySelector("#tens");
var appendSeconds = document.querySelector("#seconds");
var buttonStart = document.querySelector("#button-start");
var buttonStop = document.querySelector("#button-stop");
var buttonReset = document.querySelector("#button-reset");
var interval;

function startTimer() {
  tens++;
  if (tens < 9) {
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}

buttonStart.onclick = function () {
  interval = setInterval(startTimer);
};
