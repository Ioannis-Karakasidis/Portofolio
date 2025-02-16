class Endboss extends MovableObject {
  IMAGES_WALKING = [
    "img/4_enemie_boss_chicken/1_walk/G1.png",
    "img/4_enemie_boss_chicken/1_walk/G2.png",
    "img/4_enemie_boss_chicken/1_walk/G3.png",
    "img/4_enemie_boss_chicken/1_walk/G4.png",
  ];

  IMAGES_ALERT = [
    "img/4_enemie_boss_chicken/2_alert/G5.png",
    "img/4_enemie_boss_chicken/2_alert/G6.png",
    "img/4_enemie_boss_chicken/2_alert/G7.png",
    "img/4_enemie_boss_chicken/2_alert/G8.png",
    "img/4_enemie_boss_chicken/2_alert/G9.png",
    "img/4_enemie_boss_chicken/2_alert/G10.png",
    "img/4_enemie_boss_chicken/2_alert/G11.png",
    "img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  IMAGES_ATTACK = [
    "img/4_enemie_boss_chicken/3_attack/G13.png",
    "img/4_enemie_boss_chicken/3_attack/G14.png",
    "img/4_enemie_boss_chicken/3_attack/G15.png",
    "img/4_enemie_boss_chicken/3_attack/G16.png",
    "img/4_enemie_boss_chicken/3_attack/G17.png",
    "img/4_enemie_boss_chicken/3_attack/G18.png",
    "img/4_enemie_boss_chicken/3_attack/G19.png",
    "img/4_enemie_boss_chicken/3_attack/G20.png",
  ];

  IMAGES_HURT = [
    "img/4_enemie_boss_chicken/4_hurt/G21.png",
    "img/4_enemie_boss_chicken/4_hurt/G22.png",
    "img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  IMAGES_DEAD = [
    "img/4_enemie_boss_chicken/5_dead/G24.png",
    "img/4_enemie_boss_chicken/5_dead/G25.png",
    "img/4_enemie_boss_chicken/5_dead/G26.png",
  ];
  world;
  i = 0;
  Win = ["img/9_intro_outro_screens/win/won_2.png"];
  GAME_OVER = ["img/9_intro_outro_screens/game_over/game over.png"];
  animationInterval = null;
  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };
  energy = 100;

  /**
   * Creates a new Endboss instance and initializes it.
   * Loads images, sets position, and starts animations.
   */
  constructor() {
    super();
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_ALERT);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_ATTACK);
    this.animationInterval = setStoppableInterval(() => this.animated(), 300);
    this.bossdistance = setStoppableInterval(
      () => this.checkfordistance(),
      300
    );
    this.x = 2200;
    this.y = 80;
    this.height = 400;
    this.width = 300;
    this.isseen = false;
    this.hasMoved = false;
    this.animate();
    this.animated();
    this.checkOutOfBounds();
  }

  /**
   * Continuously checks if the object's x-coordinate goes out of bounds.
   * If the x-coordinate is less than or equal to -440, the game is over.
   */
  checkOutOfBounds() {
    setInterval(() => {
      if (this.x <= -440) {
        gameover();
      }
    }, 0);
  }

  /**
   * Checks if the character is within a certain distance of the enemy boss
   * and updates the enemy's visibility state accordingly.
   */
  checkfordistance() {
    if (Math.abs(world.character.x - world.enemyboss.x) < 550) {
      this.isseen = true;
    }
  }

  /**
   * Animates the enemy boss's behavior based on its visibility and movement state.
   * Plays an alert animation when first seen, then performs an attack sequence.
   * Otherwise, the enemy continues its walking animation.
   */
  animated() {
    if (this.isseen && !this.hasMoved) {
      this.triggerAlertAndAttack();
    } else {
      this.playAnimation(this.IMAGES_WALKING);
    }
  }

  /**
   * Triggers the alert animation followed by the attack sequence, adjusting the enemy's position.
   */
  triggerAlertAndAttack() {
    this.playAnimation(this.IMAGES_ALERT);
    setTimeout(() => {
      this.playAnimation(this.IMAGES_WALKING);
      this.speed += 5;
      setTimeout(() => {
        this.hasMoved = true;
        this.speed = 0.15;
      }, 200);
    }, 500);
  }
}
