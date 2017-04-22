export enum TileType {
    EMPTY,
    CAPITOL
}

export default class Tile {
    type: TileType;
    position: number[];
    knowed: boolean = false;

    constructor(position=[], type=TileType.EMPTY) {
        this.type = type;
        this.position = position;
    }

    get x() {
        return this.position[0];
    }

    get y() {
        return this.position[1];
    }
}