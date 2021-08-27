var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;//undefined
var database;

var cars, car1, car2;

var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-30);
  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();
  
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}

function windowResized(){
  resizeCanvas(displayWidth-20, displayHeight-30)
}

