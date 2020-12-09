import * as Phaser from "phaser";
import { Bullet } from "./bullet";

export class Bullets extends Phaser.Physics.Arcade.Group {
  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);

    this.createMultiple({
      frameQuantity: 10,
      key: "bullet",
      active: false,
      visible: false,
      classType: Bullet,
    });
  }

  public fireBullet(x: number, y: number) {
    let bullet = this.getFirstDead(false);

    if (bullet) {
      bullet.fire(x, y);
    }
  }
}
