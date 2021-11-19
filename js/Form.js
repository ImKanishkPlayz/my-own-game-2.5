class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.title = createElement('h2');
  }
  hide(){
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("my own game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      gameState = 1;
    });

   

  }
}
