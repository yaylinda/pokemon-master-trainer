import { isEmpty, shuffle } from "lodash";
import { PokemonPieceRank } from "../pieces/gamePieceTypes";
import { GameboardCell, GameboardCellAction, GameboardCellType } from "./gameboardTypes";

// const gameboardCells: GameboardCell[] = [
//     {
//         id: 1,
//         name: 'Pallet Town',
//         description: 'Start here',
//         type: GameboardCellType.CITY,
//         nextCells: [2],
//         action: null,
//     },
//     {
//         id: 2,
//         name: 'Catch \'em',
//         description: '',
//         type: GameboardCellType.POKEMON,
//         nextCells: [3],
//         action: null,
//         actionMetadata: null,
//     },
// ];


const numPinkCells = 15; // 10 pokemon, 5 events
const numGreenCells = 19; // 10 pokemon, 9 events
const numBlueCells = 19; // 10 pokemon, 9 events
const numRedCells = 13; // 7 pokemon, 6 events

const cellTypeToActionMap: { [key in GameboardCellType]: GameboardCellAction[] } = {
    [GameboardCellType.CITY]: [], // TODO
    [GameboardCellType.EVENT]: [GameboardCellAction.DRAW_EVENT],
    [GameboardCellType.INDIGO_PLATEAU]: [], // TODO
    [GameboardCellType.POKEMON]: [GameboardCellAction.ENCOUNTER_POKEMON],
}

const generateCells = (numCells: number, rank: PokemonPieceRank, type: GameboardCellType, actions: GameboardCellAction[]): GameboardCell[] => {
    const cells: GameboardCell[] = [];

    for (let i = 0; i < numCells; i++) {
        cells.push({
            id: i,
            name: '',
            description: '',
            rank,
            type,
            actions: isEmpty(actions) ? cellTypeToActionMap[type] : actions,
            nextCells: [],
        });
    }

    return cells;
}

export const initializeGameboard = () => {
    const pinkCells = shuffle([
        ...generateCells(10, PokemonPieceRank.PINK, GameboardCellType.POKEMON, []),
        ...generateCells(5, PokemonPieceRank.PINK, GameboardCellType.EVENT, []),
    ]);

    const greenCells = shuffle([
        ...generateCells(10, PokemonPieceRank.GREEN, GameboardCellType.POKEMON, []),
        ...generateCells(9, PokemonPieceRank.GREEN, GameboardCellType.EVENT, []),
    ]);

    const blueCells = shuffle([
        ...generateCells(10, PokemonPieceRank.BLUE, GameboardCellType.POKEMON, []),
        ...generateCells(9, PokemonPieceRank.BLUE, GameboardCellType.EVENT, []),
    ]);

    const redCells = shuffle([
        ...generateCells(7, PokemonPieceRank.RED, GameboardCellType.POKEMON, []),
        ...generateCells(6, PokemonPieceRank.RED, GameboardCellType.EVENT, []),
    ]);
}