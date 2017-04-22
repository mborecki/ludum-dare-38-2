import * as Phaser from 'phaser-ce';

export class BootState extends Phaser.State {
  stage: Phaser.Stage

  init () {
    this.stage.backgroundColor = '#EDEEC9'


    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.refresh();
  }

  preload () {
    this.game.load.spritesheet('bg', './assets/images/bg.jpg', 682, 397);

    this.game.load.spritesheet('tile', './assets/images/tile.png', 164, 180);
    this.game.load.spritesheet('fog', './assets/images/fog.png', 164, 180);
    this.game.load.spritesheet('capitol-1', './assets/images/capitol-1.png', 164, 180);
  }

  render () {
    this.game.state.start('Game')
  }
}
