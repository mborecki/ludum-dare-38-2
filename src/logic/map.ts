import CFG from '../cfg';
import Tile from './tile';

export default class Map {
    data: Tile[];
    size: number;
    constructor(size: number = CFG.MAP.W*CFG.MAP.H, data? : Tile[]) {
        this.data = [];
        this.size = size;

        for(let i = 0; i < this.size; i++) {
            this.data.push(new Tile());
        }
    }

    get(x: number, y: number) {
        return this.data[y * CFG.MAP.W + x];
    }
}