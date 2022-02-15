import { isEmpty, shuffle } from "lodash";
import { GameboardCell, GameboardCellType, GameActionType, PokemonPieceRank } from "../../common/types";

const numPinkCells = 15; // 10 pokemon, 5 events
const numGreenCells = 19; // 10 pokemon, 9 events
const numBlueCells = 19; // 10 pokemon, 9 events
const numRedCells = 13; // 7 pokemon, 6 events

const generateCells = (numCells: number, rank: PokemonPieceRank, type: GameboardCellType): GameboardCell[] => {
    const cells: GameboardCell[] = [];

    for (let i = 0; i < numCells; i++) {
        cells.push({
            id: 'TODO',
            name: '',
            description: '',
            rank,
            type,
            getAction: () => {
                return {
                action: GameboardCellType.POKEMON 
                    ? GameActionType.ENCOUNTER_POKEMON 
                    : GameActionType.DRAW_EVENT_CARD,
                metadata: { 
                    value: rank,
                },
            }},
            nextCells: [],
        } as GameboardCell);
    }

    return cells;
}

const generateNormalColoredCells = (): { 
    pinkCells: GameboardCell[],
    greenCells: GameboardCell[],
    blueCells: GameboardCell[],
    redCells: GameboardCell[],
} => {

    const pinkCells = shuffle([
        ...generateCells(10, PokemonPieceRank.PINK, GameboardCellType.POKEMON),
        ...generateCells(5, PokemonPieceRank.PINK, GameboardCellType.EVENT),
    ]);

    const greenCells = shuffle([
        ...generateCells(10, PokemonPieceRank.GREEN, GameboardCellType.POKEMON),
        ...generateCells(9, PokemonPieceRank.GREEN, GameboardCellType.EVENT),
    ]);

    const blueCells = shuffle([
        ...generateCells(10, PokemonPieceRank.BLUE, GameboardCellType.POKEMON),
        ...generateCells(9, PokemonPieceRank.BLUE, GameboardCellType.EVENT),
    ]);

    const redCells = shuffle([
        ...generateCells(7, PokemonPieceRank.RED, GameboardCellType.POKEMON),
        ...generateCells(6, PokemonPieceRank.RED, GameboardCellType.EVENT),
    ]);

    return {
        pinkCells,
        greenCells,
        blueCells,
        redCells,
    };
}

const generateCityCells = (): GameboardCell[] => {
    return [
        {
            id: 'cityCell_palletTown',
            name: 'Pallet Town',
            description: 'Start Here',
            rank: null,
            type: GameboardCellType.CITY,
            getAction: () => null,
            nextCells: [],
        },
        {
            id: 'cityCell_viridianCity',
            name: 'Viridian City',
            description: 'Draw 2 Item Cards',
            rank: null,
            type: GameboardCellType.CITY,
            getAction: () => ({ 
                action: GameActionType.DRAW_ITEM_CARD, 
                metadata: { 
                    value: 2,
                },
            }),
            nextCells: [],
        },
        {
            id: 'cityCell_pewterCity',
            name: 'Pewter City',
            description: 'Draw 2 Item Cards',
            rank: null,
            type: GameboardCellType.CITY,
            getAction: () => ({ 
                action: GameActionType.DRAW_ITEM_CARD, 
                metadata: { 
                    value: 2,
                },
            }),
            nextCells: [],
        },
        {
            id: 'cityCell_ceruleanCity',
            name: 'Cerulean City',
            description: 'Revive 1 Pokemon',
            rank: null,
            type: GameboardCellType.CITY,
            getAction: () => ({ 
                action: GameActionType.REVIVE_POKEMON, 
                metadata: { 
                    value: 1,
                },
            }),
            nextCells: [],
        },
        {
            id: 'cityCell_lavenderTown',
            name: 'Lavender Town',
            description: 'Draw 2 Item Cards',
            rank: null,
            type: GameboardCellType.CITY,
            getAction: () => ({ 
                action: GameActionType.DRAW_ITEM_CARD, 
                metadata: { 
                    value: 2,
                },
            }),
            nextCells: [],
        },
        {
            id: 'cityCell_saffronCity',
            name: 'Saffron City',
            description: 'Draw 2 Item Cards',
            rank: null,
            type: GameboardCellType.CITY,
            getAction: () => ({ 
                action: GameActionType.DRAW_ITEM_CARD, 
                metadata: { 
                    value: 2,
                },
            }),
            nextCells: [],
        },
        {
            id: 'cityCell_celadonCity',
            name: 'Celadon City',
            description: 'Draw 2 Item Cards',
            rank: null,
            type: GameboardCellType.CITY,
            getAction: () => ({ 
                action: GameActionType.DRAW_ITEM_CARD, 
                metadata: { 
                    value: 2,
                },
            }),
            nextCells: [],
        },
        {
            id: 'cityCell_vermillionCity',
            name: 'Vermillion City',
            description: 'Revive 1 Pokemon',
            rank: null,
            type: GameboardCellType.CITY,
            getAction: () => ({ 
                action: GameActionType.REVIVE_POKEMON, 
                metadata: { 
                    value: 1,
                },
            }),
            nextCells: [],
        },
        {
            id: 'cityCell_fuchsiaCity',
            name: 'Fuchsia City',
            description: 'Draw 2 Item Cards',
            rank: null,
            type: GameboardCellType.CITY,
            getAction: () => ({ 
                action: GameActionType.DRAW_ITEM_CARD, 
                metadata: { 
                    value: 2,
                },
            }),
            nextCells: [],
        },
        {
            id: 'cityCell_cinnabarIsland',
            name: 'Cinnabar Island',
            description: 'Draw 2 Item Cards. 20 Power Points needed to advance to Indigo Plateau next turn.',
            rank: null,
            type: GameboardCellType.CITY,
            getAction: () => ({ 
                action: GameActionType.DRAW_ITEM_CARD, 
                metadata: { 
                    value: 2,
                },
            }),
            nextCells: [],
        },
    ];
}

const generateIndigoPlateauCells = (): GameboardCell[] => {
    return [
        {
            id: 'indigoCell_0',
            name: '',
            description: 'Arrive from Island',
            rank: null,
            type: GameboardCellType.INDIGO_PLATEAU,
            getAction: () => null,
            nextCells: [],
        },
        {
            id: 'indigoCell_1',
            name: '',
            description: 'Draw 1 Item Card',
            rank: null,
            type: GameboardCellType.ITEM,
            getAction: () => null  ,
            nextCells: [],
        },
        {
            id: 'indigoCell_2',
            name: '',
            description: 'Arrive from Island',
            rank: null,
            type: GameboardCellType.INDIGO_PLATEAU,
            getAction: () => null,
            nextCells: [],
        },
        {
            id: 'indigoCell_3',
            name: '',
            description: 'Arrive from Island',
            rank: null,
            type: GameboardCellType.INDIGO_PLATEAU,
            getAction: () => null,
            nextCells: [],
        },
        {
            id: 'indigoCell_4',
            name: '',
            description: 'Arrive from Island',
            rank: null,
            type: GameboardCellType.INDIGO_PLATEAU,
            getAction: () => null,
            nextCells: [],
        },
        {
            id: 'indigoCell_5',
            name: '',
            description: 'Arrive from Island',
            rank: null,
            type: GameboardCellType.INDIGO_PLATEAU,
            getAction: () => null,
            nextCells: [],
        },
        {
            id: 'indigoCell_6',
            name: '',
            description: 'Arrive from Island',
            rank: null,
            type: GameboardCellType.INDIGO_PLATEAU,
            getAction: () => null,
            nextCells: [],
        },
        {
            id: 'indigoCell_7',
            name: '',
            description: 'Arrive from Island',
            rank: null,
            type: GameboardCellType.INDIGO_PLATEAU,
            getAction: () => null,
            nextCells: [],
        },
        {
            id: 'indigoCell_8',
            name: '',
            description: 'Arrive from Island',
            rank: null,
            type: GameboardCellType.INDIGO_PLATEAU,
            getAction: () => null,
            nextCells: [],
        },
        {
            id: 'indigoCell_9',
            name: '',
            description: 'Arrive from Island',
            rank: null,
            type: GameboardCellType.INDIGO_PLATEAU,
            getAction: () => null,
            nextCells: [],
        },
        {
            id: 'indigoCell_10',
            name: '',
            description: 'Arrive from Island',
            rank: null,
            type: GameboardCellType.INDIGO_PLATEAU,
            getAction: () => null,
            nextCells: [],
        },
        {
            id: 'indigoCell_11',
            name: '',
            description: 'Arrive from Island',
            rank: null,
            type: GameboardCellType.INDIGO_PLATEAU,
            getAction: () => null,
            nextCells: [],
        },
        {
            id: 'indigoCell_12',
            name: '',
            description: 'Arrive from Island',
            rank: null,
            type: GameboardCellType.INDIGO_PLATEAU,
            getAction: () => null,
            nextCells: [],
        },
        {
            id: 'indigoCell_13',
            name: '',
            description: 'Arrive from Island',
            rank: null,
            type: GameboardCellType.INDIGO_PLATEAU,
            getAction: () => null,
            nextCells: [],
        },
    ];
}

export const initializeGameboard = () => {
    const { pinkCells, greenCells, blueCells, redCells } = generateNormalColoredCells();
    const cityCells = generateCityCells();
    const indigoPlateauCells = generateIndigoPlateauCells();
    
}