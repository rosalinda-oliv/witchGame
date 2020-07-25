function preload() {
  imgInitialScreen = loadImage('images/stage/initScreen.png');
  imgStage = loadImage('images/stage/BG.png');
  
  imgGameOver = loadImage('images/assets/game-over.png');
  fontInitialScreen = loadFont('images/assets/fontInitScreen.otf');
  imgLife = loadImage('images/assets/heart.png');
  
  imgCharacter = loadImage('images/character/run.png');

  imgEnemy = loadImage('images/enemies/drops.png');
  imgTrollEnemy = loadImage('images/enemies/troll.png');
  imgFlyingEnemy = loadImage('images/enemies/flyingDrops.png');
  
  band = loadJSON('band.json');

  gameSound = loadSound('som/trilha_jogo.mp3');
  jumpSound = loadSound('som/somPulo.mp3');
}