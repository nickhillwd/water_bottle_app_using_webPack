var waterBottle = require('./water_bottle/water_bottle.js');
var displayVolume = function(){
  var volume = document.getElementById('volume');
  volume.innerText = "Volume: " + waterBottle.volume;
}

window.onload = function(){
  console.log("App Started: Volume of water bottle:", waterBottle.volume);
  displayVolume();
};

