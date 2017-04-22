import * as Phaser from 'phaser-ce';
import CFG from '../cfg';
import GameStage from '../states/game';
import LogicTile from '../logic/tile';

export default class Tile extends Phaser.Sprite {
    gameState: GameStage;
    tile: LogicTile;
    sprite: Phaser.Sprite;
    
    constructor({stage, x, y, tile}) {
        super(stage.game, x, y);
        this.gameState = stage;
        this.tile = tile;

        this.init();
    }

    private init() {
        this.sprite = new Phaser.Sprite(this.game, 0, 0);
        this.sprite.x = 1;
        this.sprite.y = 1;
        this.addChild(this.sprite);
        this.updateTile();
    }

    updateTile() {
        this.sprite.loadTexture('tile');
    }


}