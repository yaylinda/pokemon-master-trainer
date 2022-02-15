import { chunk, shuffle} from 'lodash';
import { DiceRollValue, RivalCard } from "../../../common/types";

const DICE_ARRAY: DiceRollValue[]  = [1, 2, 3, 4, 5, 6];
const ATTACK_BONUSES = [6, 7, 8];

/**
 * 
 * @returns 
 */
const getAttackBonus = (): { [key in DiceRollValue]: number } => {
    const shuffled = shuffle(DICE_ARRAY);
    const chunked = chunk(shuffled, 2);
    
    const attackBonus: { [key in DiceRollValue]?: number }  = {};
    chunked.forEach((value, index) => {
        value.forEach(d => {
            attackBonus[d] = ATTACK_BONUSES[index];
        });
    });

    return attackBonus as { [key in DiceRollValue]: number };
}

/**
 * 
 */
const generateRivalCards: RivalCard[] = [
    {
        name: 'Gary',
        pokemonName: 'Arcanine',
        attackStrength: 15,
        attackBonus: getAttackBonus(),
    },
    {
        name: 'Agatha',
        pokemonName: 'Gengar',
        attackStrength: 12,
        attackBonus: getAttackBonus(),
    },
    {
        name: 'Bruno',
        pokemonName: 'Machamp',
        attackStrength: 11,
        attackBonus: getAttackBonus(),
    },
    {
        name: 'Lorelei',
        pokemonName: 'Lapras',
        attackStrength: 10,
        attackBonus: getAttackBonus(),
    },
    {
        name: 'Lance',
        pokemonName: 'Dragonite',
        attackStrength: 14,
        attackBonus: getAttackBonus(),
    },
];

export const rivalCards = shuffle(generateRivalCards);