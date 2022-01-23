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

/**
 * 
 * @param min 
 * @param max 
 * @returns 
 */
export const randomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (Math.floor(max) -  Math.ceil(min)) +  Math.ceil(min));
}