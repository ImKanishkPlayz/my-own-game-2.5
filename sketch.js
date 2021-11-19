var canvas, backgroundImage;

var gameState = 0;

var form, player, game;

var ninja, ninjaImg, enemyNinjaImg, zombieImg, shuriken, shurikenImg;

var zombie1, zombie2, zombie3;

var villain, villainImg;

var fireball, fireballImg;

var fireballG;

var zCounter = 0;


function preload(){
  backgroundImage = loadImage("images/village-1.jpg");
  ninjaImg = loadAnimation("images/ninja.png");
  enemyNinjaImg = loadAnimation("images/enemy_ninja.png");
  zombieImg = loadImage("images/zombie.png");
  shurikenImg = loadImage("images/shuriken_.png");
  villainImg = loadImage("images/villain_.png");
  fireballImg = loadImage("images/fireball_.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  
  game = new Game();
 
  game.start();
}


function draw(){
  background(backgroundImage);
  if(gameState === 1){
    clear();
    game.play();
  }


  if(gameState === 2){
    game.end();
  }
}
