import Building from '../building';
import {TileType} from '../tile'

export default class Capitol extends Building {
    constructor([x,y]) {
        super([x,y], TileType.CAPITOL);
    }

    get housing() {
        return 1;
    }

    get food() {
        return 1;
    }
}