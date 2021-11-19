class Game {
  constructor(){

  }

  

  start(){
    if(gameState === 0){
      player = new Player();
      
      form = new Form()
      form.display();
    }
    ninja = createSprite(280, height - 210);
    ninja.addAnimation("forward", ninjaImg);
    ninja.addAnimation("backward", enemyNinjaImg);
    ninja.scale = 0.5;

    shuriken = createSprite(280, height - 210);
    shuriken.addImage(shurikenImg);
    shuriken.scale = 0.05;


    zombie1 = createSprite(width - 200, height - 220);
    zombie1.addImage(zombieImg);
    zombie1.scale = 0.4;
    zombie1.velocityX = -1;

    zombie2 = createSprite(width - 320, height - 220);
    zombie2.addImage(zombieImg);
    zombie2.scale = 0.4;
    zombie2.velocityX = -1;

    zombie3 = createSprite(width - 440, height - 220);
    zombie3.addImage(zombieImg);
    zombie3.scale = 0.4;
    zombie3.velocityX = -1;

    fireballG = new Group();
    
  }

  spawnfireball(){
    if(frameCount % 60 === 0){
      console.log("fireball");
      fireball = createSprite(Math.round(random(100, width - 100)), Math.round(random(50, 150)));
      fireball.addImage(fireballImg)
      fireball.scale = 0.2;
      fireball.velocityY = 10;
      fireballG.add(fireball);
    } 
  }

  play(){
    form.hide();
    background(backgroundImage);

    if(keyIsDown(LEFT_ARROW)){
      ninja.x = ninja.x - 8;
      shuriken.x = shuriken.x - 8;
      ninja.changeAnimation("backward", enemyNinjaImg);
    }

    if(keyIsDown(RIGHT_ARROW)){
      ninja.x = ninja.x + 8;
      shuriken.x = shuriken.x + 8;
      ninja.changeAnimation("forward", ninjaImg);
    }

    if(zombie1.isTouching(ninja) || zombie2.isTouching(ninja) || zombie3.isTouching(ninja)){
      ninja.destroy();
      shuriken.destroy();
    }

    if(mousePressedOver(zombie1) || mousePressedOver(zombie2) || mousePressedOver(zombie3)) {
      shuriken.velocityX = 200;
    }

    if(ninja.isTouching(fireballG)){
      ninja.destroy();
      shuriken.destroy();
    }

    if(shuriken.isTouching(villain)){
      villain.destroy();
      fireballG.destroyEach();
    }

    if(mousePressedOver(villain)){
      shuriken.velocityX = 200;
    }

    if(shuriken.isTouching(zombie1)){
      zombie1.velocityX = 0;
      zombie1.destroy();
      zombie1.remove();
      shuriken.velocityX = 0;
      shuriken.x = ninja.x;
      shuriken.y = ninja.y;
      zCounter++;
      if(zCounter === 3){
        villain = createSprite(width - 200, height - 220);
        villain.addImage(villainImg);
        villain.scale = 0.6;
      }
    }

    if(shuriken.isTouching(zombie2)){
      zombie2.velocityX = 0;
      zombie2.destroy();
      zombie2.remove();
      shuriken.velocityX = 0;
      shuriken.x = ninja.x;
      shuriken.y = ninja.y;
      zCounter++;
      if(zCounter === 3){
        villain = createSprite(width - 200, height - 220);
        villain.addImage(villainImg);
        villain.scale = 0.6;
      }
    }

    if(shuriken.isTouching(zombie3)){
      zombie3.velocityX = 0;
      zombie3.destroy();
      zombie3.remove();
      shuriken.velocityX = 0;
      shuriken.x = ninja.x;
      shuriken.y = ninja.y;
      zCounter++;
      if(zCounter === 3){
        villain = createSprite(width - 200, height - 220);
        villain.addImage(villainImg);
        villain.scale = 0.6;
      }
    }
    

    if(zCounter >= 3){
      this.spawnfireball();
    }

   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}
