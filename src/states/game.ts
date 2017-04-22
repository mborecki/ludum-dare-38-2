import * as Phaser from 'phaser-ce'
import {setResponsiveWidth} from '../utils'
import LogicMap from '../logic/map';
import Map from '../sprites/map';

export default class GameState extends Phaser.State {
  lMap: LogicMap;
  map: Map;



  init () {
    this.initLogicMap();
    this.initMap();

    window['GS'] = this;
  }

  preload () {}

  create () {

  }

  render () {

  }

  initLogicMap() {
    this.lMap = new LogicMap();
  }

  initMap() {
    this.map = new Map({stage: this, x: 300, y: 0});
    this.game.add.existing(this.map);
  }
}
