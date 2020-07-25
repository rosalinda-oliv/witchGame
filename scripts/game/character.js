class Character extends Animation{
  constructor(array, image, x, variationY, widthWish, heightWish, widthSprite, heightSprite){
    super(array, image, x, variationY, widthWish, heightWish, widthSprite, heightSprite);
    
    this.variationY = variationY;
    this.initY = height - this.height - this.variationY;
    this.y = this.initY;
    
    this.jumpSpeed = 0; //it always starts from 0
    this.gravity = 6;
    this.jumpHeight = -50;
    this.jumps = 0;
    this.invincible = false;
  }
  
  jump(){
    if(this.jumps < 2){
      this.jumpSpeed = this.jumpHeight;
      this.jumps++;
    }
  }
  
  applyGravity() {
    this.y = this.y + this.jumpSpeed;
    this.jumpSpeed = this.jumpSpeed + this.gravity;
    
    if(this.y > this.initY){
      this.y = this.initY;
      this.jumps = 0;
    }
  }
  
  becomesInvincible() {
    this.invincible = true;
    this.isBlinking = true;
    setTimeout(() => {
      this.invincible = false
      this.stopBlinking();
    }, 1000);
  }
  
  isColliding(enemy){
    if(this.invincible) {
      return false;
    }
    
    const precision = 0.7
    return collideRectCircle(
      this.x, 
      this.y, 
      this.width * precision,
      this.height * precision, 
      enemy.x + enemy.width/2+10, 
      enemy.y + enemy.height/2,
      enemy.width * precision,
      enemy.height * precision
    );
    
    
  }
}