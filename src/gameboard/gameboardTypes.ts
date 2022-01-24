import { PokemonPieceRank } from "../pieces/gamePieceTypes";

export interface Gameboard {
    cells: GameboardCell[],
}

export interface GameboardCell {
    id: number,
    name: string,
    description: string,
    rank: PokemonPieceRank,
    type: GameboardCellType,
    nextCells: number[],
    actions: GameboardCellAction[],
}

export enum GameboardCellType {
    CITY = 'CITY',
    INDIGO_PLATEAU = 'INDIGO_PLATEAU',
    POKEMON = 'POKEMON',
    EVENT = 'EVENT',
}

export enum GameboardCellAction {
    DRAW_EVENT = 'DRAW_EVENT',
    ENCOUNTER_POKEMON = 'ENCOUNTER_POKEMON',
    DRAW_ITEM = 'DRAW_ITEM',
    FINAL_BATTLE = 'FINAL_BATTLE',
}
