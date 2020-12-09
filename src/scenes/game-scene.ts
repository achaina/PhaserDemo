import * as Phaser from "phaser";
import { Bullets } from "./physic-objects/bullets";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "Shit your pants",
};

export class GameScene extends Phaser.Scene {
  private score: number;

  private bullets: Bullets | undefined;

  private pirate: Phaser.GameObjects.Image | undefined;

  constructor() {
    super(sceneConfig);
    this.score = 0;
    //this.square = this.add.rectangle(400, 400, 100, 100, 0xffffff) as any;
  }
  public preload() {
    this.load.image("background", "assets/background/background.png");
    this.load.image("bullet", "assets/characters/pirate.png");
    this.load.image("pirate", "assets/characters/pirate.png");
  }

  public create() {
    //this.physics.add.existing(this.square);
    this.add.sprite(0, 0, "background");
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    this.bullets = new Bullets(this);
    this.pirate = this.add.image(windowWidth / 2, windowWidth * 0.9, "pirate");
  }

  public update() {
    const keyboardEvent: Phaser.Types.Input.Keyboard.CursorKeys = this.input.keyboard.createCursorKeys();
    this.moveRectangle(keyboardEvent);

    if (this.pirate) {
      this.input.on("pointermove", (pointer: any) => {
        this.pirate.x = pointer.x;
      });

      this.input.on("pointerdown", (pointer: any) => {
        console.log("yolo2");
        this.bullets?.fireBullet(this.pirate.x, this.pirate.y);
      });
    }
  }

  public render() {
    // this.game.debug.text("Press space to shoot", 10, 55);
  }

  // TO DO: fixing warning some day
  public moveRectangle(keyboardEvent: Phaser.Types.Input.Keyboard.CursorKeys) {
    // if (keyboardEvent.up.isDown) {
    //   this.square.body.setVelocityY(-500);
    // } else if (keyboardEvent.down.isDown) {
    //   this.square.body.setVelocityY(500);
    // } else {
    //   this.square.body.setVelocityY(0);
    // }
    // if (keyboardEvent.right.isDown) {
    //   this.square.body.setVelocityX(500);
    // } else if (keyboardEvent.left.isDown) {
    //   this.square.body.setVelocityX(-500);
    // } else {
    //   this.square.body.setVelocityX(0);
    // }
  }
}
