import { randomInteger } from "../common/util";

export const USER_LOCAL_STORAGE_KEY = "USER";

export const POKEMON_MASTER_TRAINER_COOKIE_NAME = 'POKEMON_MASTER_TRAINER_COOKIE';

const POKEMON_COLORS = [
    'Red',
    'Green',
    'Blue',
    'Yellow',
    'Gold',
    'Silver',
    'Crystal',
    'Ruby',
    'Sapphire',
    'Emerald',
    'Diamond',
    'Pearl',
    'Platinum',
    'Black',
    'White',
    'X',
    'Y',
    'Sun',
    'Moon',
    'Sword',
    'Shield',
];

/**
 * 
 * @returns 
 */
export const generateTrainerName = () => {
    const colorIndex = randomInteger(0, POKEMON_COLORS.length);
    const color = POKEMON_COLORS[colorIndex];
    const randNum = randomInteger(10, 100);

    return `Pokemon Trainer ${color}_${randNum}`;
}
