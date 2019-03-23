    
    let weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET','//api.openweathermap.org/data/2.5/weather?id=5061036&appid=2be184dbacae081dacf9bde2487c043c&units=imperial', true);

weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    
    if(document.getElementById("city") != null) {
      document.getElementById('city').innerHTML = weatherData.name;
    }
  
    if(document.getElementById('current-temp') != null) {
      document.getElementById('current-temp').innerHTML = weatherData.main.temp;
    }
    
    var lowTemp = parseFloat(document.getElementById('highTemp').innerHTML = weatherData.main.temp_max);
    var highTemp = parseFloat(document.getElementById('lowTemp').innerHTML = weatherData.main.temp_min);
    var windSpeed = parseFloat(document.getElementById('windSpeed').innerHTML = weatherData.wind.speed);
    
    var iconcode = weatherData.weather[0].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;
  
  var temp = (lowTemp + highTemp) / 2;

  var wc = windChill(temp, windSpeed);

  document.getElementById("outputDiv").innerHTML = wc.toFixed(2);
}

// ------ Processing ------ 
function windChill(temp, speed) {
    // works out the wind chill by using the formula below

    var spd = Math.pow(speed, 0.16);
    var wc = (35.74 + (0.6215 * temp) - (35.75 * spd) + (0.4275 * temp * spd));

  return wc;
}

