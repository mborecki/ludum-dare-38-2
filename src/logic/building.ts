import Tile from './tile';

export default class Building extends Tile {
    name: string = 'Some Building!';
    level: number = 1;

    get population() {
        return 0;
    }

    get housing() {
        return 0;
    }

    get food() {
        return 0;
    }

    get wood() {
        return 0;
    }

    get stone() {
        return 0;
    }

    get metal() {
        return 0;
    }
}