import * as Phaser from 'phaser-ce';

export class BootState extends Phaser.State {
  stage: Phaser.Stage

  init () {
    this.stage.backgroundColor = '#EDEEC9'
  }

  preload () {
    this.game.load.spritesheet('tile', './assets/images/tile.png', 164, 180);
  }

  render () {
    this.game.state.start('Game')
  }
}
