import { Gameboard } from "../gameboard/gameboardTypes";

export interface Game {
    gameboard: Gameboard,
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