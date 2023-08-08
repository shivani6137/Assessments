var now = new Date();
var day = now.getDay();
var months = now.getMonth();
var daten = now.getDate();
var year = now.getFullYear();

var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var ids = ["dayname", "month", "date", "year"];

document.getElementById("dayname").innerHTML = week[day];
document.getElementById("month").innerHTML = month[months];
document.getElementById("dat").innerHTML = daten;
document.getElementById("year").innerHTML = year;
setInterval(() => {
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ap;
    if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
    }
    if (seconds >= 0 && seconds <= 9) {
        seconds = "0" + seconds;
    }
    if (hour >= 0 && hour <= 11) {
        ap = "AM";
    }
    else {
        ap = "PM";
    }
    document.getElementById("time").innerHTML = hour + ":" + minutes + ":" + seconds + " " + ap;
}, 1000);