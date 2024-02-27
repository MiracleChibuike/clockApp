const hour = document.getElementById("Hours");
const minutes = document.getElementById("Minutes");
const seconds = document.getElementById("Seconds");
const ampm = document.getElementById("ampm");




function updateClock() {
    var hr = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();

    hour.innerText = hr;
    minutes.innerText = min;
    seconds.innerText = sec;
    setTimeout(function () {
        updateClock()
    }, 1000)
    if (hr > 12) {
      ampm.innerText = "PM";
    }
}

updateClock()