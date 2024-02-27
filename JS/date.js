const day = document.getElementById("day");
const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");

function updateYear() {
    // var d = new Date().getDay();
    var dt = new Date().getDate();
    var mt = new Date().getMonth();
    var yr = new Date().getFullYear();

    // day.innerText = d;
    date.innerText = dt;
    month.innerText = mt;
    year.innerText = yr;

    setTimeout(function () {
        updateYear()
    })
    console.log(mt)
}

updateYear();

// var helloNew = document.querySelector(".hello");
// helloNew.innerText = new Date().getMonth();



