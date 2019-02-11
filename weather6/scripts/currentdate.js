function currentDate() {
    var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("demo").innerHTML = days[d.getDay()];
document.getElementById("demo").innerHTML = d.getMonth();
document.getElementById("demo").innerHTML = d.getFullYear();
}