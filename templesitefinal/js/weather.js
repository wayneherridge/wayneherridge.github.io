let weatherRequest = new XMLHttpRequest();


weatherRequest.open('GET','http://api.openweathermap.org/data/2.5/weather?id=2650435&appid=2be184dbacae081dacf9bde2487c043c&units=imperial', true);

//london = 2650435
//preston = 2639912
//rome = 6539761
//paris = 2988507

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
    var windSpeed = parseFloat(document.getElementById('sky').innerHTML = weatherData.weather[0].main);
  
  var temp = (lowTemp + highTemp) / 2;

}

