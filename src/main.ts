import { GameScene } from "./scenes/game-scene";

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: "Sample",
  scene: GameScene,
  type: Phaser.AUTO,
  width: 1080,
  height: 1980,
  scale: {
    width: window.innerWidth,
    height: window.innerHeight,
  },

  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },

  parent: "game",
};

export const game = new Phaser.Game(gameConfig);
