import * as Phaser from 'phaser-ce';
import CFG from '../cfg';
import GameStage from '../states/game';
import LogicMap from '../logic/map';
import Tile from './tile';
import {MapToISO} from '../utils';

export default class Map extends Phaser.Sprite {
    gameState: GameStage;
    map: LogicMap;
    tiles: Tile[];
    onTileClicked: Phaser.Signal = new Phaser.Signal();
    
    constructor({stage, x, y}) {
        super(stage.game, x, y);
        this.gameState = stage;
        this.map = stage.lMap;
        // this.width = 400;
        // this.width = 400;
        // this.scale.x = 1;
        // this.scale.y = 1;
        this.init();
    }

    private init() {
        this.tiles = [];
        for(let i = 0; i < this.map.size; i++) {
            let tx = i % CFG.MAP.W;
            let ty = Math.floor(i / CFG.MAP.W)
            let [x, y] = MapToISO(tx, ty);
            let t = new Tile({
                stage: this.gameState,
                x,
                y,
                tile: this.map.get(tx, ty)
            });

            this.addChild(t);
            t.onClick.add(() => {
                this.onTileClicked.dispatch(tx, ty);
            })
            this.tiles.push(t);
        }
    }

    updateTiles() {
        this.tiles.forEach(t => {
            t.updateTile();
        });
    }
}