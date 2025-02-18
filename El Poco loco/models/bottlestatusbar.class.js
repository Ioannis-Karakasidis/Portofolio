class Bottlestatusbar extends DrawableObject {
  IMAGES = [
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png",
  ];
  percentage = 0;

  /**
   * Initializes a new instance of the class.
   * Sets up properties such as position, dimensions, and initial percentage value.
   * Also loads necessary images.
   */
  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 15;
    this.y = 0;
    this.width = 200;
    this.height = 70;
    this.setpercentage(0);
  }
}
