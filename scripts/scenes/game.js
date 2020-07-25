class Game {
  constructor() {
    this.currentIndex = 0;
    
    this.map = band.map
  }

  setup() {
    stage = new Stage(imgStage, 3);
    score = new Score();
    character = new Character(characterArray, imgCharacter, 0, 30, 110, 135, 220, 270);
    life = new Life(band.settings.topLife, band.settings.lifeInit);

    const enemyDrops = new Enemy(enemyArray, imgEnemy, width - 52, 30, 52, 52, 104, 104, 10);
    const trollEnemy = new Enemy(enemyTrollArray, imgTrollEnemy, width, 0, 200, 200, 400, 400, 15);
    const flyingEnemy = new Enemy(enemyFlyingArray, imgFlyingEnemy, width - 52, 200, 100, 75, 200, 150, 10);

    enemies.push(enemyDrops);
    enemies.push(trollEnemy);
    enemies.push(flyingEnemy);
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      character.jump();
      jumpSound.play();
    }
  }

  draw() {
    //background
    stage.display();
    stage.move();

    //Life
    life.draw();

    //Score
    score.display();
    score.addScore();

    //Witch
    character.display();
    character.applyGravity();

    //Enemies
    const currentLine = this.map[this.currentIndex];
    const enemy = enemies[currentLine.enemy];
    const visibleEnemy = enemy.x < -enemy.width;
    
    enemy.speed = currentLine.speed;

    enemy.display();
    enemy.move();
    

    if (visibleEnemy) {
      this.currentIndex++;
      enemy.show();
      if (this.currentIndex > this.map.length - 1) {
        this.currentIndex = 0;
      }
    }

    if (character.isColliding(enemy)) {
      life.loseLife();
      character.becomesInvincible();
      if (life.lifes === 0) {
        noLoop();
        currentScene = 'gameOver';
        gameOver.draw();
       
      }
    }
  }
}