class Coinsstatusbar extends DrawableObject {
  IMAGES = [
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png",
  ];

  percentage = 0;

  /**
   * Creates an instance of Coinsstatusbar.
   * Loads the images for the status bar, initializes its position and dimensions,
   * and sets the initial percentage to 0.
   */
  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 14;
    this.y = 95;
    this.width = 200;
    this.height = 70;
    this.setpercentage(0);
  }
}
