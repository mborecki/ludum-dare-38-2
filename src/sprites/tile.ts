import * as Phaser from 'phaser-ce';
import CFG from '../cfg';
import GameStage from '../states/game';
import LogicTile, {TileType} from '../logic/tile';
import Building from '../logic/building';

export default class Tile extends Phaser.Sprite {
    gameState: GameStage;
    tile: LogicTile;
    sprite: Phaser.Sprite;
    onClick: Phaser.Signal = new Phaser.Signal();
    
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

        this.sprite.inputEnabled = true;
        this.sprite.input.pixelPerfectOver = true;
        this.sprite.input.pixelPerfectClick = true;
        this.sprite.events.onInputOver.add(() => {
            // this.game.debug.text(`OVER ${this.tile.x} ${this.tile.y}`, 32, 32);
        })
        this.sprite.events.onInputDown.add(() => {
            this.onClick.dispatch();
        })
    }

    updateTile() {
        if (!this.tile.knowed) {
            this.sprite.loadTexture('fog');
            return;
        }

        switch(this.tile.type) {
            case TileType.CAPITOL:
                this.sprite.loadTexture(`capitol-${(this.tile as Building).level}`);
                break;

            default:
                this.sprite.loadTexture('tile');
        }

    }


}