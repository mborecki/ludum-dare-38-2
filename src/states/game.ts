import * as Phaser from 'phaser-ce'
import {setResponsiveWidth} from '../utils'
import LogicMap from '../logic/map';
import {TileType} from '../logic/tile';
import Map from '../sprites/map';

enum PlayerState {
  IDLE,
  EXPLORE
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
    this.initUI();

    this.upkeepPhase();

    window['GS'] = this;
  }

  preload () {}

  create () {

  }

  render () {
    this.game.debug.text(`${this.playerState} ACT: ${this.resources.actions}`, 32, 32, 'red');
  }

  initLogicMap() {
    this.lMap = new LogicMap();
  }

  initMap() {
    this.map = new Map({stage: this, x: 255, y: -60});
    this.game.add.existing(this.map);
    this.map.onTileClicked.add((x, y) => {
      this.tileClicked(x, y);
    })
  }

  upkeepPhase() {
    this.resources.housing = 0;
    this.resources.food = 0;
    let r : any = this.lMap.getResorceBilans(this.resources);

    r.actions = Math.min(r.food, r.population);

    console.info(this.resources);
  }

  initUI() {

    // ENT TURN
    let btnEnd = this.game.add.sprite(10, 60, 'btn-end');
    btnEnd.inputEnabled = true;
    btnEnd.events.onInputDown.add(() => {
      this.endPressed();
    });


    // EXPLORE
    let btnExplore = this.game.add.sprite(10, 10, 'btn-explore');
    btnExplore.inputEnabled = true;
    btnExplore.events.onInputDown.add(() => {
      this.explorePressed();
    });
  }

  explorePressed() {
    this.playerState = PlayerState.EXPLORE;
  }

  endPressed() {
    this.upkeepPhase();
  }

  tileClicked(x, y) {
    let t = this.lMap.get(x, y);
    switch (this.playerState) {
      case PlayerState.EXPLORE:
        if(!t.knowed && this.resources.actions) {
          t.knowed = true;
          this.resources.actions--;
        } 
        this.playerState = PlayerState.IDLE;
        this.map.updateTiles();
        break;
    }
  }
}
