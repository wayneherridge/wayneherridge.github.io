function daysOfWeek(num) {
    var d = new Date();

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var dayName = weekday[d.getDay() + num];
    return dayName;
}
let forecastRequest = new XMLHttpRequest();

forecastRequest.open('GET', '//api.openweathermap.org/data/2.5/forecast?id=5061036&appid=2be184dbacae081dacf9bde2487c043c&units=imperial', true);

forecastRequest.send();

forecastRequest.onload = function () {
    let weatherData = JSON.parse(forecastRequest.responseText);

    let list = weatherData.list;
    console.log(list);

    var count = -1;

    var tbody = document.querySelector('tbody');
    for (var i = 0; i <= list.length; i++) {
        //console.log("inside");
        var time = list[i].dt_txt;

        if (time.includes('00:00:00')) {
            var myTr = document.createElement("tr");
            var myTd1 = document.createElement("td");
            var myTd2 = document.createElement("td");
            var myTd3 = document.createElement("td");
            var myTd4 = document.createElement("td");

            //console.log(time);
            count += 1;
            let dayName = daysOfWeek(count);
            console.log(dayName);

            let desc = list[i].weather[0].description;
            console.log(desc);

            let high = list[i].main.temp_max;
            let min = list[i].main.temp_min;

            console.log(high);
            console.log(min);

            let wind = list[i].wind.speed;
            console.log(wind);

            var icon = list[i].weather[0].icon;
            var icon_path = "http://openweathermap.org/img/w/" + icon + ".png";
            
            console.log(icon_path);

            myTd1.textContent = dayName;
            myTd2.textContent = desc;
            myTd3.textContent = high + "\xB0F / " + min + "\xB0F";
            myTd4.textContent = wind + " mph";

            myTr.appendChild(myTd1);
            myTr.appendChild(myTd2);
            myTr.appendChild(myTd3);
            myTr.appendChild(myTd4);

        }
        tbody.appendChild(myTr);
    }
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
