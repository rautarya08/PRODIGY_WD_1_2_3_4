let timer;
let isRunning = false;
let startTime;
let lapCounter = 1;

function startPause() {
  const startPauseButton = document.getElementById("startPause");

  if (!isRunning) {
    startTime = new Date().getTime() - (lapCounter === 1 ? 0 : lapCounter - 1);
    timer = setInterval(updateDisplay, 10);
    startPauseButton.textContent = "Pause";
  } else {
    clearInterval(timer);
    startPauseButton.textContent = "Resume";
  }

  isRunning = !isRunning;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  lapCounter = 1;
  startTime = 0; // Reset the start time to 0
  updateDisplay();
  document.getElementById("startPause").textContent = "Start";
  document.getElementById("lapList").innerHTML = "";
}


function lap() {
  if (isRunning) {
    const lapTime = new Date().getTime() - startTime;
    const lapList = document.getElementById("lapList");
    const lapItem = document.createElement("li");
    lapItem.className = "lap-item";
    lapItem.textContent = `Lap ${lapCounter++}: ${formatTime(lapTime)}`;
    lapList.appendChild(lapItem);
  }
}

function updateDisplay() {
  const currentTime = isRunning ? new Date().getTime() - startTime : 0;
  document.getElementById("minutes").textContent = pad(Math.floor(currentTime / 60000));
  document.getElementById("seconds").textContent = pad(Math.floor((currentTime % 60000) / 1000));
  document.getElementById("milliseconds").textContent = pad(currentTime % 1000);
}


function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTime(time) {
  const minutes = pad(Math.floor(time / 60000));
  const seconds = pad(Math.floor((time % 60000) / 1000));
  const milliseconds = pad(time % 1000);
  return `${minutes}:${seconds}:${milliseconds}`;
}
