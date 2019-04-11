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

// London

let weatherRequest2 = new XMLHttpRequest();

weatherRequest2.open('GET','//api.openweathermap.org/data/2.5/weather?id=2650435&appid=2be184dbacae081dacf9bde2487c043c&units=imperial', true);

weatherRequest2.send();

weatherRequest2.onload = function(){
    let weatherInfo = JSON.parse(weatherRequest2.responseText);
    console.log(weatherInfo);

    document.getElementById('current-temp2').innerHTML = weatherInfo.main.temp;
    

}//end of the function

// Preston

let weatherRequest3 = new XMLHttpRequest();

weatherRequest3.open('GET','//api.openweathermap.org/data/2.5/weather?id=2639912&appid=2be184dbacae081dacf9bde2487c043c&units=imperial', true);

weatherRequest3.send();

weatherRequest3.onload = function(){
    let weatherInfo = JSON.parse(weatherRequest3.responseText);
    console.log(weatherInfo);

    document.getElementById('current-temp3').innerHTML = weatherInfo.main.temp;
    

}//end of the function

// Rome 
let weatherRequest4 = new XMLHttpRequest();

weatherRequest4.open('GET','//api.openweathermap.org/data/2.5/weather?id=6539761&appid=2be184dbacae081dacf9bde2487c043c&units=imperial', true);

weatherRequest4.send();

weatherRequest4.onload = function(){
    let weatherInfo = JSON.parse(weatherRequest4.responseText);
    console.log(weatherInfo);

    document.getElementById('current-temp4').innerHTML = weatherInfo.main.temp;
    

}//end of the function

let weatherRequest5 = new XMLHttpRequest();

weatherRequest5.open('GET','//api.openweathermap.org/data/2.5/weather?id=2988507&appid=2be184dbacae081dacf9bde2487c043c&units=imperial', true);

weatherRequest5.send();

weatherRequest5.onload = function(){
    let weatherInfo = JSON.parse(weatherRequest5.responseText);
    console.log(weatherInfo);

    document.getElementById('current-temp5').innerHTML = weatherInfo.main.temp;
    

}//end of the function

