class InitialScreen {
  constructor() {}

  draw() {
    this._imgBackground();
    this._initialText();
    this._bottom();
  }

  _imgBackground() {
    image(imgInitialScreen, 0, 0, width, height);
  }

  _initialText() {
    textFont(fontInitialScreen);
    textAlign(CENTER);
    textSize(80);
    text('The Adventures of', width / 2, height / 3);
    textSize(150);
    text('Sarah Sanderson', width / 2, height / 5 * 3);
  }
  
  _bottom() {
    managerBottom.y = height / 7 * 5;
    managerBottom.draw();
  }

}