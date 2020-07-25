class Score {
  constructor(){
    this.points = 0;
  }
  
  
  display() {
    textAlign(RIGHT);
    textSize(50);
    fill('#fff');
    text(parseInt(this.points), width - 30, 50)
  }
  
  addScore() {
    this.points += 0.2
  }
}