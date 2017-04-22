export enum TileType {
    EMPTY
}

export default class Tile {
    type: TileType;

    constructor(type=TileType.EMPTY) {
        this.type = type;
    }
}