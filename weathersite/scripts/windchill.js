var lowTemp = parseFloat(document.getElementById("lowTemp").textContent);
var highTemp = parseFloat(document.getElementById('highTemp').textContent);
var speed = parseFloat(document.getElementById('windSpeed').textContent);

var temp = (lowTemp + highTemp) / 2;

var wc = windChill(temp, speed);

document.getElementById("outputDiv").innerHTML = wc.toFixed(2);


// ------ Processing ------ 
function windChill(temp, speed) {
    // works out the wind chill by using the formula below

    var spd = Math.pow(speed, 0.16);
    var wc = (35.74 + (0.6215 * temp) - (35.75 * spd) + (0.4275 * temp * spd));
    // returns the result to doInputOutput var wc
    return wc;
}
