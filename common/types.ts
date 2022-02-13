export interface User {
    userId: string,
    username: string,
}

export interface Game {
    id: string,
    status: GameStatus,
    createdAt: number, // timestamp in seconds,
    createdBy: string,
    players: string[],
    gameboard: Gameboard,
}

export enum GameStatus {
    WAITING = 'WAITING',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED',
}

export enum GameActionType {
    DRAW_ITEM_CARD = 'DRAW_ITEM', 
    DRAW_EVENT_CARD = 'DRAW_ITEM',
    ENCOUNTER_POKEMON = 'ENCOUNTER_POKEMON',
    REVIVE_POKEMON = 'REVIVE_POKEMON', 
}

export interface GameAction {
    action: GameActionType,
    metadata?: { value: any}
}

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

export interface PokemonPiece {
    id: number,
    name: string,
    rank: PokemonPieceRank,
    powerPoints: number,
    attackStrength: number,
    spriteUrl: string,
}

export interface WildPokemonPiece extends PokemonPiece {
    diceRolls: DiceRollValue[],
}

export enum PokemonPieceRank {
    STARTER = 'STARTER',
    PINK = 'PINK',
    GREEN = 'GREEN',
    BLUE = 'BLUE',
    RED = 'RED',
    YELLOW = 'YELLOW',
}

export type DiceRollValue = 1 | 2 | 3 | 4 | 5 | 6;

export interface RivalCard {
    name: string,
    pokemonName: string,
    attackStrength: number,
    attackBonus: { [key in DiceRollValue]: number }
}

export interface GameCardFields {
    name: string,
    count: number,
    description: string,
    getAction?: (value: any) => GameAction;
}

export interface GameCard<T, CardType = ItemCardType | EventCardType> extends GameCardFields {
    type: CardType,
}

export enum ItemCardType {
    ATTACK_BONUS_ONE = 'ATTACK_BONUS_ONE',
    ATTACK_BONUS_TWO = 'ATTACK_BONUS_TWO',
    ATTACK_BONUS_THREE = 'ATTACK_BONUS_THREE',
    ATTACK_BONUS_FOUR = 'ATTACK_BONUS_FOUR',
    ATTACK_BONUS_FIVE = 'ATTACK_BONUS_FIVE',
    GREAT_BALL = 'GREAT_BALL',
    ULTRA_BALL = 'ULTRA_BALL',
    MASTER_BALL = 'MASTER_BALL',
    TIME_MACHINE = 'TIME_MACHINE',
    FLY = 'FLY',
    POTION = 'POTION',
    POKE_DOLL = 'POKE_DOLL',
}

export enum EventCardType {
    UNKNOWN_DUNGEON_POKEMON = 'UNKNOWN_DUNGEON_POKEMON',
    CHANCE = 'CHANCE',
    POKEMON_CENTER = 'POKEMON_CENTER',
    TRADE_POKEMON = 'TRADE_POKEMON',
    LETS_FIGHT = 'LETS_FIGHT',
    DRAW_ONE_ITEM = 'DRAW_ONE_ITEM',
    DRAW_TWO_ITEM = 'DRAW_TWO_ITEM',
    DRAW_THREE_ITEM = 'DRAW_THREE_ITEM',
}