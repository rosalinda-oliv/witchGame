class Enemy extends Animation {
  constructor(array, image, x, variationY, widthEnemy, heightEnemy, widthSprite, heightSprite, speed){
    super(array, image, x, variationY, widthEnemy, heightEnemy, widthSprite, heightSprite);
    
    this.speed = speed;
    this.x = width;
  }
  
  move() {
    this.x = this.x - this.speed; 
  }
  
  show(){
    this.x = width;
  }
}