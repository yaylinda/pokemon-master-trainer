import { shuffle } from "lodash"
import { GameCard, GameCardFields, ItemCardType } from "./gamePieceTypes";

/**
 * 
 */
const itemCardTypeConfigs: { [key in ItemCardType]: GameCardFields} = {
    [ItemCardType.ATTACK_BONUS_ONE]: {
        name: 'Attack Bonus (+1)',
        count: 4,
        description: 'Add 1 to your Pokemon Attack Strength.',
    },
    [ItemCardType.ATTACK_BONUS_TWO]: {
        name: 'Attack Bonus (+2)',
        count: 4,
        description: 'Add 2 to your Pokemon Attack Strength.',
    },
    [ItemCardType.ATTACK_BONUS_THREE]: {
        name: 'Attack Bonus (+3)',
        count: 4,
        description: 'Add 3 to your Pokemon Attack Strength.',
    },
    [ItemCardType.ATTACK_BONUS_FOUR]: {
        name: 'Attack Bonus (+4)',
        count: 3,
        description: 'Add 4 to your Pokemon Attack Strength.',
    },
    [ItemCardType.ATTACK_BONUS_FIVE]: {
        name: 'Attack Bonus (+5)',
        count: 3,
        description: 'Add 5 to your Pokemon Attack Strength.',
    },
    [ItemCardType.FLY]: {
        name: 'Fly',
        count: 5,
        description: 'On your turn, you may fly to a city or town instead of rolling the die.',
    },
    [ItemCardType.GREAT_BALL]: {
        name: 'Great Ball',
        count: 6,
        description: 'Before rolling to catch a Pokemon, play this to add or subtract 1 from your roll.',
    },
    [ItemCardType.ULTRA_BALL]: {
        name: 'Ultra Ball',
        count: 6,
        description: 'Before rolling to catch a Pokemon, play this to add or subtract 1 or 2, from your roll.',
    },
    [ItemCardType.MASTER_BALL]: {
        name: 'Master Ball',
        count: 6,
        description: 'Before rolling to catch a Pokemon, play this to add or subtract 1, 2, 3, or 4, from your roll.',
    },
    [ItemCardType.POKE_DOLL]: {
        name: 'Poke Doll',
        count: 4,
        description: 'Use to stop another player from battling or trading with you.',
    },
    [ItemCardType.POTION]: {
        name: 'Potion',
        count: 5,
        description: 'Use to revive one of your knocked-out Pokemon.',
    },
    [ItemCardType.TIME_MACHINE]: {
        name: 'Time Machine',
        count: 4,
        description: 'Play this card to re-roll one roll of the die.',
    },
}

/**
 * 
 * @returns 
 */
const generateItemCards = (): GameCard<ItemCardType>[] => {
    const cards: GameCard<ItemCardType>[] = [];

    Object.keys(itemCardTypeConfigs).forEach(itemCardType => {
        const fields: GameCardFields = itemCardTypeConfigs[itemCardType as ItemCardType];
        for (let i = 0; i < fields.count; i++) {
            cards.push({
                ...fields,
                type: itemCardType as ItemCardType,
            });
        }
    });

    return cards;
}

export const itemCards = shuffle(generateItemCards());