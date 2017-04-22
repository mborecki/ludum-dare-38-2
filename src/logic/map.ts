import CFG from '../cfg';
import Tile from './tile';
import Building from './building';
import Capitol from './buildings/capitol';

export default class Map {
    data: Tile[];
    size: number;
    constructor(size: number = CFG.MAP.W*CFG.MAP.H) {
        this.data = [];
        this.size = size;

        for(let i = 0; i < this.size; i++) {
            let x = i % CFG.MAP.W;
            let y = Math.floor(i / CFG.MAP.W)
            if (x === CFG.MAP.START.X && y === CFG.MAP.START.Y) {
                let t = new Capitol([x,y]);
                t.knowed = true;
                this.data.push(t);
                continue;
            }

            let t = new Tile([x, y]);
            this.data.push(t);
        }

        [[1,0], [-1,0], [0,1], [0,-1]].forEach(([x,y]) => {
            this.get(CFG.MAP.START.X + x, CFG.MAP.START.Y + y).knowed = true;
        })
    }

    get(x: number, y: number) {
        return this.data[y * CFG.MAP.W + x];
    }

    getResorceBilans(r = {
        population: 0,
        food: 0,
        wood: 0,
        stone: 0,
        metal: 0,
        housing: 0
    }) {

        this.data.forEach((t) => {
            if (t instanceof Building) {
                r.population += t.population;
                r.food += t.food;
                r.wood += t.wood;
                r.stone += t.stone;
                r.metal += t.metal;
                r.housing += t.housing;
            }
        });

        return r;
    }
}