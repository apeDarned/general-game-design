import Phaser from "phaser";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#000000",
  scene: {
    create: function() {
      this.add.text(100, 100, "Phaser is alive", {
        font: "32px Arial",
        color: "#ffffff",
      });
    },
  },
};

new Phaser.Game(config);