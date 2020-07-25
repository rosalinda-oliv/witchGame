class GameOverBottom{
  constructor() {
    this._bottom = new ManagerBottom('Restart', width / 2, height / 2);
  }
  
  draw() {
    this._imgBackground();
    this._bottom.draw();
  }
  
   _imgBackground(){
    image(imgGameOver, width / 2 - 200, height / 3);
   }
}

