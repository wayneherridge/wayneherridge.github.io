var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  var superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}

function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['squadName'];
  header.appendChild(myH1);

  var myPara = document.createElement('p');
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  header.appendChild(myPara);
}

function showHeroes(jsonObj) {
  var heroes = jsonObj['members'];
      
  for (var i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');
      var myImg = document.createElement('img');
      
      if (heroes[i].name == "Molecule Man") {
                myImg.setAttribute('src', 'https://vignette.wikia.nocookie.net/ultimate-marvel-cinematic-universe/images/b/b8/JohnDouglas_MU_Molecule-Man_05.jpg/revision/latest/scale-to-width-down/366?cb=20151111002345');
                myImg.setAttribute('alt', 'Molecule Man');
            } else if (heroes[i].name == "Madame Uppercut") {
                myImg.setAttribute('src', 'https://image.shutterstock.com/image-vector/pop-art-comic-book-panel-450w-1040428651.jpg');
                myImg.setAttribute('alt', 'Madame Uppercut');
            } else if (heroes[i].name == "Eternal Flame") {
                myImg.setAttribute('src', 'https://static.comicvine.com/uploads/square_small/1/15776/891358-eternalflame.jpg');
                myImg.setAttribute('alt', 'Eternal Flame');
            }

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
    myArticle.appendChild(myImg);

    section.appendChild(myArticle);
  }
}