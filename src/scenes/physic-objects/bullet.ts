import * as Phaser from "phaser";

export class Bullet extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "bullet");
  }

  public fire(x: number, y: number) {
    this.body.reset(x, y);

    this.setActive(true);
    this.setVisible(true);

    this.setVelocityY(-1000);
  }

  public preUpdate(time: number, delta: number) {
    super.preUpdate(time, delta);

    if (this.y <= -32) {
      this.setActive(false);
      this.setVisible(false);
    }
  }
}
