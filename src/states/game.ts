import * as Phaser from 'phaser-ce'
import {setResponsiveWidth} from '../utils'
import LogicMap from '../logic/map';
import {TileType} from '../logic/tile';
import Map from '../sprites/map';

enum PlayerState {
  IDLE
}

export default class GameState extends Phaser.State {
  lMap: LogicMap;
  map: Map;

  playerState: PlayerState = PlayerState.IDLE;

  resources = {
    actions: 0,
    population: 1,
    housing: 0,
    food: 0,
    wood: 0,
    stone: 0,
    metal: 0
  }



  init () {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.refresh();

    this.add.sprite(0,0,'bg');

    this.initLogicMap();
    this.initMap();

    this.upkeepPhase();
    this.upkeepPhase();
    this.upkeepPhase();

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
    this.map = new Map({stage: this, x: 255, y: -60});
    this.game.add.existing(this.map);
  }

  upkeepPhase() {
    this.resources.housing = 0;
    this.resources.food = 0;
    let r : any = this.lMap.getResorceBilans(this.resources);

    r.actions = Math.min(r.food, r.population);

    console.info(this.resources);
  }
}
