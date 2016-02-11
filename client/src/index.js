var waterBottle = require('./water_bottle/water_bottle.js');
var displayVolume = function(){
  var volume = document.getElementById('volume');
  volume.innerText = "Volume: " + waterBottle.volume;
};

window.onload = function(){
  console.log("App Started: Volume of water bottle:", waterBottle.volume);
  displayVolume();

  var news = document.getElementById('news');
  var drinkButton = document.getElementById('drink');
  var gulpButton = document.getElementById('gulp');
  var refilButton = document.getElementById('refil');
  var spillButton = document.getElementById('spill');

  drinkButton.onclick = function(){
    waterBottle.drink();
    displayVolume();
    news.innerText = "Gulp... You Took A Sip";
  };

  refilButton.onclick = function(){
    console.log("button clicked!")
    waterBottle.fill();
    displayVolume();
    news.innerText = "Topped Up!"
  };

  spillButton.onclick = function(){
    waterBottle.empty();
    displayVolume();
    news.innerText = "Opps!!";
  };

  gulpButton.onclick = function(){
    waterBottle.gulp();
    displayVolume();
    news.innerText = "Gulp! Don't Choke!!";
  };
};

