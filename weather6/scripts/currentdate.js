function currentDate() {
    var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("day").innerHTML = days[d.getDay()];
document.getElementById("month").innerHTML = d.getMonth();
document.getElementById("year").innerHTML = d.getFullYear();
}