// Download and store the URL
var requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

// Create a new request
var request = new XMLHttpRequest();

// Open the Request (GET makes the network request / URL of the JSON file above
request.open('Get', requestURL);

// Set response type to JSON
request.responseType = 'json';
// Send the request
request.send();

// Store the response to thr request

request.onload = function() {
  var superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}

// Populate the header
function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['squadName'];
  header.appendChild(myH1);
  
  // Populate the Sub Heading
  var myPara = document.createElement('p');
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj ['formed'];
  header.appendChild(myPara);

}

// Create and populate the cards

function showHeroes(jsonObj) {
  var heroes = jsonObj['members'];
  
for (var i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');

    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers:';

    var superPowers = heroes[i].powers;
    for (var j = 0; j < superPowers.length; j++) {
    var listItem = document.createElement('li');
    listItem.textContent = superPowers[j];
    myList.appendChild(listItem);
}
  
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
}
}
