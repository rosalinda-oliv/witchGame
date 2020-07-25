//array --> position of each of the animations in the png image
//image ---> set of sprites
// x --> image position in x (that i'm going to select)

class Animation {
  constructor(array, image, x, variationY, widthElement, heightElement, widthSprite, heightSprite){
    this.array = array;
    this.image = image;
    this.width = widthElement;
    this.height = heightElement;
    this.x = x;
    this.variationY = variationY;
    this.y = height - this.height - this.variationY;
    this.widthSprite = widthSprite;
    this.heightSprite = heightSprite;
    
    this.currentFrame = 0;
    
    this.isBlinking =false;
    this.blinkCount = 0;
  
  }
   display(){
    image(this.image, this.x, this.y, this.width, this.height, this.array[this.currentFrame][0],this.array[this.currentFrame][1], this.widthSprite, this.heightSprite);
    
    this.animate();
  }
  
  
   blink(){
        this.isBlinking = true;
        if (frameCount%2 === 0 ){
            this.image.filter(INVERT);
            this.blinkCount++;
        }
    }
    stopBlinking(){
        this.isBlinking = false;
        if (this.blinkCount % 2 !==0){
            this.image.filter(INVERT);
            this.blinkCount = 0;
        }        
    }
  
   
  animate(){
    this.currentFrame++;
    
    if(this.currentFrame >= this.array.length -1){
      this.currentFrame = 0;
    }
    
    if (this.isBlinking){
            this.blink();
        }
  }
}

