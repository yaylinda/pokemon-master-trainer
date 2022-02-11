import { GameAction } from "../game/gameTypes";
import { PokemonPieceRank } from "../pieces/gamePieceTypes";

export interface Gameboard {
    cells: GameboardCell[],
}

export interface GameboardCell {
    id: string,
    name: string,
    description: string,
    rank: PokemonPieceRank | null,
    type: GameboardCellType,
    nextCells: number[],
    getAction: () => GameAction | null,
}

export enum GameboardCellType {
    CITY = 'CITY',
    INDIGO_PLATEAU = 'INDIGO_PLATEAU',
    POKEMON = 'POKEMON',
    EVENT = 'EVENT',
    ITEM = 'ITEM',
}
}
