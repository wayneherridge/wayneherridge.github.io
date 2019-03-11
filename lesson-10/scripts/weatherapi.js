let weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET','http://api.openweathermap.org/data/2.5/weather?id=5061036&appid=2be184dbacae081dacf9bde2487c043c&units=imperial', true);

weatherRequest.send();

weatherRequest.onload=function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    
    document.getElementById('city').innerHTML = weatherData.name;
    document.getElementById('current-temp').innerHTML = weatherData.main.temp;
    document.getElementById('highTemp').innerHTML = weatherData.main.temp_max;
    document.getElementById('lowTemp').innerHTML = weatherData.main.temp_min;
    document.getElementById('windSpeed').innerHTML = weatherData.wind.speed;

    
}