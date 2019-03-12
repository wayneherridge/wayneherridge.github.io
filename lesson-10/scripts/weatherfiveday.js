let forecastRequest = new XMLHttpRequest();

forecastRequest.open('GET','//api.openweathermap.org/data/2.5/forecast?id=5061036&appid=2be184dbacae081dacf9bde2487c043c&units=imperial', true);

forecastRequest.send();

forecastRequest.onload = function() {
    let weatherData = JSON.parse(forecastRequest.responseText);
    console.log(weatherData);
    
    
    /*
      document.getElementById('city').innerHTML = weatherData.name;
  
    if(document.getElementById('current-temp') != null) {
      document.getElementById('current-temp').innerHTML = weatherData.main.temp;
    }
    
    var lowTemp = parseFloat(document.getElementById('highTemp').innerHTML = weatherData.main.temp_max);
    var highTemp = parseFloat(document.getElementById('lowTemp').innerHTML = weatherData.main.temp_min);
    var windSpeed = parseFloat(document.getElementById('windSpeed').innerHTML = weatherData.wind.speed);
    
    var iconcode = weatherData.weather[0].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;
*/
}