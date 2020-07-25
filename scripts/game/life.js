class Life {
  constructor(totalLife, initLife) {
    this.totalLife = totalLife;
    this.initLife = initLife;
    this.lifes = this.initLife;

    this.xInit = 20;
    this.y = 20;

    //largura
    this.weight = 25;

    //altura
    this.height = 25
  }

  draw() {
    for (let i = 0; i < this.lifes; i++) {
      const margin = i * 10;
      const position = this.xInit * (i + 1);

      image(imgLife, position + margin, this.y, this.weight, this.height);
    }
  }

  winLife() {
    if (this.lifes < this.totalLife) {
      this.lifes++;
    }
  }

  loseLife() {
    this.lifes--;
  }
}