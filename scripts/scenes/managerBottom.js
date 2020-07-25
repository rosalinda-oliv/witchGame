class ManagerBottom {
  constructor(text, x, y){
    this.text = text;
    this.x= x;
    this.y = y;
    this.bottom = createButton(this.text);
    this.bottom.mousePressed(() => this._alterScene());
    this.bottom.addClass('bottom-screen-init');
  }
  
  draw(){
    this.bottom.position(this.x, this.y);
    this.bottom.center('horizontal');
  }
  
  _alterScene() {
    this.bottom.remove();
    
    if(currentScene === 'gameOver'){
      window.location.reload();
    }else{
     currentScene = 'game';   
    }
  } 
}