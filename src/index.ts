/// <reference path="../lib/phaser.comments.d.ts"/>
import * as Phaser from 'phaser-ce'

import {BootState} from './states/boot'
import GameState from './states/game'

class Game extends Phaser.Game {

  constructor () {
    let width = document.documentElement.clientWidth > 768 ? 682 : document.documentElement.clientWidth
    let height = document.documentElement.clientHeight > 397 ? 397 : document.documentElement.clientHeight

    super(682, 397, Phaser.AUTO, 'content', null)


    this.state.add('Boot', BootState, false)
    this.state.add('Game', GameState, false)

    this.state.start('Boot')

  }

  init() {}
}

new Game()
