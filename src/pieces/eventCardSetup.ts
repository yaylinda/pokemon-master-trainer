import { shuffle } from "lodash";
import { EventCardType, GameCard, GameCardFields } from "./gamePieceTypes";

/**
 * 
 */
const eventCardTypeConfigs: { [key in EventCardType]: GameCardFields } = {
    [EventCardType.CHANCE]: {
        name: 'Chance',
        count: 5,
        description: 'Choose one Pokemon of the color you landed on, including any face-up ones.',
    },
    [EventCardType.DRAW_ONE_ITEM]: {
        name: 'Draw One Item',
        count: 9,
        description: 'Draw one ITEM CARDS from the top of the deck.',
        value: 1,
    },
    [EventCardType.DRAW_TWO_ITEM]: {
        name: 'Draw Two Items',
        count: 5,
        description: 'Draw two ITEM CARDS from the top of the deck.',
        value: 2,
    },
    [EventCardType.DRAW_THREE_ITEM]: {
        name: 'Draw Three Items',
        count: 3,
        description: 'Draw three ITEM CARDS from the top of the deck.',
        value: 3,
    },
    [EventCardType.LETS_FIGHT]: {
        name: 'Let\'s Fight',
        count: 10,
        description: 'Fight a trainer battle with any other player. Remember, knocked-out Pokemon cannot fight.',
    },
    [EventCardType.POKEMON_CENTER]: {
        name: 'Pokemon Center',
        count: 2,
        description: 'Revive any one of your knocked-out Pokemon.',
    },
    [EventCardType.TRADE_POKEMON]: {
        name: 'Trade',
        count: 10,
        description: 'Trade a Pokemon with another Trainer. Starter Pokemon cannot be traded.',
    },
    [EventCardType.UNKNOWN_DUNGEON_POKEMON]: {
        name: 'Unknown Dungeon Pokemon',
        count: 10,
        description: 'Choose one Yellow Pokemon chip. Roll to catch \'em.',
    },
}

/**
 * 
 * @returns 
 */
const generateEventCards = (): GameCard<EventCardType>[] => {
    const cards: GameCard<EventCardType>[] = [];

    Object.keys(eventCardTypeConfigs).forEach(eventCardType => {
        const fields: GameCardFields = eventCardTypeConfigs[eventCardType as EventCardType];
        for (let i = 0; i < fields.count; i++) {
            cards.push({
                ...fields,
                type: eventCardType as EventCardType,
            });
        }
    });

    return cards;
}

export const eventCards = shuffle(generateEventCards());