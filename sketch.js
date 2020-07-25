function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  gameSound.loop();
  
  game = new Game();
  initialScreen = new InitialScreen();
  gameOver = new GameOverBottom();
  game.setup();
  
  scene = {
    game,
    initialScreen,
    gameOver
  };
  
  managerBottom = new ManagerBottom('Init', width/2, height/2);
 
}

function keyPressed() {
  game.keyPressed(key);
}

function draw() {
   scene[currentScene].draw();
}