class Bottle extends DrawableObject {
  bottleanimation = [
    "img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
    "img/6_salsa_bottle/2_salsa_bottle_on_ground.png",
  ];
  offset = {
    top: 30,
    left: 30,
    right: 30,
    bottom: 30,
  };

  /**
   * Creates an instance of Bottle.
   * Initializes the bottle animation, randomizes the x-coordinate,
   * and sets a fixed y-coordinate. Starts an interval for playing the animation.
   */
  constructor() {
    super().loadImage("img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
    this.loadImages(this.bottleanimation);
    this.x = 500 + Math.random() * 700;
    this.y = 300;
    setInterval(() => {
      this.playAnimation(this.bottleanimation);
    }, 400);
  }
}
