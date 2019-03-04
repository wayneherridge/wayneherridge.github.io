var request = new XMLHttpRequest();
request.open('GET',request);

var requestURL = 'http://byui-cit230.github.io/weather/data/towndata.json';

request.responseType='json';
request.send();

request.onload = function() {
    var townInfo = request.response;
    populateHeader(townInfo);
    showTowns(townInfo);
    console.log(townInfo);
}

function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['towns'];
  header.appendChild(myH1);

  var myPara = document.createElement('p');
  myPara.textContent = 'name: ' + jsonObj['motto'] + jsonObj['yearFounded'] + jsonObj['currentPopulation'] + jsonObj['averageRainfall'];
  header.appendChild(myPara);
}


function showTowns(jsonObj) {
    var towns = jsonObj['towns'];
    
    for (var i=0; i < towns.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');


        myH2.textContent = towns[i].name;
    myPara1.textContent = towns[i].motto;
    myPara2.textContent = 'Year Founded: ' +town[i].yearFounded;
    myPara3.textContent = 'Population: ' +town[i].currentPopulation;
    myPara4.textContent = 'Annual Rainfall: ' +town[i].averageRainfall;
    }
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
}
