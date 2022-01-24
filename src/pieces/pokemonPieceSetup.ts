import { randomInteger } from "../constants";
import { PokemonPiece, PokemonPieceRank, WildPokemonPiece } from "./gamePieceTypes";
import { pokemonSprites, PokemonSprite, PokemonSpriteWithId } from "./pokemonSprites";

/**
 * 
 */
const pokemonSpriteByName: { [key: string]: PokemonSpriteWithId } =
  pokemonSprites
    .filter((p) => p.pokemon_variant === "None")
    .filter((p) => p.sprite_type === "Normal")
    .filter((p) => p.pokemon_name !== "Mew")
    .map((p: PokemonSprite, index) => {
      return {
          ...p,
          id: index + 1,
      } as PokemonSpriteWithId;
    })
    .reduce((prev, curr) => {
      return {
        ...prev,
        [curr.pokemon_name]: curr,
      } as PokemonSpriteWithId;
    }, {});

/**
 * 
 */
const starterPieceByName: { [key: string]: { rank: PokemonPieceRank, powerPoints: number, attackStrength: number } } = {
    'Charmander': {
        rank: PokemonPieceRank.STARTER,
        powerPoints: 5,
        attackStrength: 4,
    },

    'Pikachu': {
        rank: PokemonPieceRank.STARTER,
        powerPoints: 3, 
        attackStrength: 4,
    },

    'Meowth': {
        rank: PokemonPieceRank.STARTER,
        powerPoints: 3, 
        attackStrength: 3,
    },

    'Bulbasaur': {
        rank: PokemonPieceRank.STARTER,
        powerPoints: 4, 
        attackStrength: 4,
    },

    'Squirtle': {
        rank: PokemonPieceRank.STARTER,
        powerPoints: 5, 
        attackStrength: 4,
    },

    'Clefairy': {
        rank: PokemonPieceRank.STARTER,
        powerPoints: 3, 
        attackStrength: 3,
    },
}

/**
 * 
 */
const wildPieceByName: { [key: string]: { rank: PokemonPieceRank, powerPoints: number, attackStrength?: number } } = {
    'Bellsprout': { rank: PokemonPieceRank.PINK, powerPoints: 2, },
    'Caterpie': { rank: PokemonPieceRank.PINK, powerPoints: 2, },
    'Doduo': { rank: PokemonPieceRank.PINK, powerPoints: 2, },
    'Diglet': { rank: PokemonPieceRank.PINK, powerPoints: 2, },
    'Exeggcute': { rank: PokemonPieceRank.PINK, powerPoints: 2, },
    'Gastly': { rank: PokemonPieceRank.PINK, powerPoints: 2, },
    'Geodude': { rank: PokemonPieceRank.PINK, powerPoints: 2, },
    'Goldeen': { rank: PokemonPieceRank.PINK, powerPoints: 2, },
    'Horsea': { rank: PokemonPieceRank.PINK, powerPoints: 2, },
    'Krabby': { rank: PokemonPieceRank.PINK, powerPoints: 2, },
    'Magikarp': { rank: PokemonPieceRank.PINK, powerPoints: 2, },
    'Magnemite': { rank: PokemonPieceRank.PINK, powerPoints: 2, },
    'Nidoran ♀': { rank: PokemonPieceRank.PINK, powerPoints: 2, },
    'Nidoran ♂': { rank: PokemonPieceRank.PINK, powerPoints: 2, },
    'Oddish': { rank: PokemonPieceRank.PINK, powerPoints: 2, },
    'Pidgey': { rank: PokemonPieceRank.PINK, powerPoints: 2, },
    'Poliwag': { rank: PokemonPieceRank.PINK, powerPoints: 2, },
    'Rattata': { rank: PokemonPieceRank.PINK, powerPoints: 2, },
    'Shellder': { rank: PokemonPieceRank.PINK, powerPoints: 2, },
    'Spearow': { rank: PokemonPieceRank.PINK, powerPoints: 2, },
    'Tentacool': { rank: PokemonPieceRank.PINK, powerPoints: 2, },
    'Venonat': { rank: PokemonPieceRank.PINK, powerPoints: 2, },
    'Weedle': { rank: PokemonPieceRank.PINK, powerPoints: 2, },
    'Zubat': { rank: PokemonPieceRank.PINK, powerPoints: 2, },

    'Abra': { rank: PokemonPieceRank.PINK, powerPoints: 3, },
    'Ekans': { rank: PokemonPieceRank.PINK, powerPoints: 3, },
    'Grimer': { rank: PokemonPieceRank.PINK, powerPoints: 3, },
    'Jigglypuff': { rank: PokemonPieceRank.PINK, powerPoints: 3, },
    'Paris': { rank: PokemonPieceRank.PINK, powerPoints: 3, },
    'Psyduck': { rank: PokemonPieceRank.PINK, powerPoints: 3, },
    'Sandshrew': { rank: PokemonPieceRank.PINK, powerPoints: 3, },
    'Slowpoke': { rank: PokemonPieceRank.PINK, powerPoints: 3, },
    'Staryu': { rank: PokemonPieceRank.PINK, powerPoints: 3, },
    'Voltorb': { rank: PokemonPieceRank.PINK, powerPoints: 3, },
    'Vulpix': { rank: PokemonPieceRank.PINK, powerPoints: 3, },

    'Cloyster': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Cubone': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Drowzee': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Dugtrio': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Electrode': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Gloom': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Golbat': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Graveler': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Kakuna': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Kingler': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Machop': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Magneton': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Mankey': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Metapod': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Muk': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Nidorina': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Pidgeotto': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Poliwhirl': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Sandslash': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Seadra': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Seaking': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Starmie': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Tangela': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Tentacruel': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },
    'Weepingbell': { rank: PokemonPieceRank.GREEN, powerPoints: 4, },

    'Clefable': { rank: PokemonPieceRank.GREEN, powerPoints: 5, },
    'Ditto': { rank: PokemonPieceRank.GREEN, powerPoints: 5, },
    'Dodrio': { rank: PokemonPieceRank.GREEN, powerPoints: 5, },
    'Eevee': { rank: PokemonPieceRank.GREEN, powerPoints: 5, },
    'Growlithe': { rank: PokemonPieceRank.GREEN, powerPoints: 5, },
    'Haunter': { rank: PokemonPieceRank.GREEN, powerPoints: 5, },
    'Kadabra': { rank: PokemonPieceRank.GREEN, powerPoints: 5, },
    'Koffing': { rank: PokemonPieceRank.GREEN, powerPoints: 5, },
    'Lickitung': { rank: PokemonPieceRank.GREEN, powerPoints: 5, },
    'Nidorino': { rank: PokemonPieceRank.GREEN, powerPoints: 5, },
    'Parasect': { rank: PokemonPieceRank.GREEN, powerPoints: 5, },
    'Ponyta': { rank: PokemonPieceRank.GREEN, powerPoints: 5, },
    'Porygon': { rank: PokemonPieceRank.GREEN, powerPoints: 5, },
    'Seel': { rank: PokemonPieceRank.GREEN, powerPoints: 5, },
    'Slowbro': { rank: PokemonPieceRank.GREEN, powerPoints: 5, },
    'Wigglytuff': { rank: PokemonPieceRank.GREEN, powerPoints: 5, },

    'Arbok': { rank: PokemonPieceRank.BLUE, powerPoints: 6, },
    'Beedrill': { rank: PokemonPieceRank.BLUE, powerPoints: 6, },
    'Butterfree': { rank: PokemonPieceRank.BLUE, powerPoints: 6, },
    'Farfetch\'d': { rank: PokemonPieceRank.BLUE, powerPoints: 6, },
    'Fearow': { rank: PokemonPieceRank.BLUE, powerPoints: 6, },
    'Golduck': { rank: PokemonPieceRank.BLUE, powerPoints: 6, },
    'Golem': { rank: PokemonPieceRank.BLUE, powerPoints: 6, },
    'Hitmonchan': { rank: PokemonPieceRank.BLUE, powerPoints: 6, },
    'Hitmonlee': { rank: PokemonPieceRank.BLUE, powerPoints: 6, },
    'Jynx': { rank: PokemonPieceRank.BLUE, powerPoints: 6, },
    'Machoke': { rank: PokemonPieceRank.BLUE, powerPoints: 6, },
    'Marowak': { rank: PokemonPieceRank.BLUE, powerPoints: 6, },
    'Pidgeot': { rank: PokemonPieceRank.BLUE, powerPoints: 6, },
    'Pinsir': { rank: PokemonPieceRank.BLUE, powerPoints: 6, },
    'Poliwrath': { rank: PokemonPieceRank.BLUE, powerPoints: 6, },
    'Raichu': { rank: PokemonPieceRank.BLUE, powerPoints: 6, },
    'Raticate': { rank: PokemonPieceRank.BLUE, powerPoints: 6, },
    'Rhyhorn': { rank: PokemonPieceRank.BLUE, powerPoints: 6, },
    'Venomoth': { rank: PokemonPieceRank.BLUE, powerPoints: 6, },
    'Victreebel': { rank: PokemonPieceRank.BLUE, powerPoints: 6, },
    'Weezing': { rank: PokemonPieceRank.BLUE, powerPoints: 6, },

    'Charmeleon': { rank: PokemonPieceRank.BLUE, powerPoints: 7, },
    'Dratini': { rank: PokemonPieceRank.BLUE, powerPoints: 7, },
    'Flareon': { rank: PokemonPieceRank.BLUE, powerPoints: 7, },
    'Hypno': { rank: PokemonPieceRank.BLUE, powerPoints: 7, },
    'Ivysaur': { rank: PokemonPieceRank.BLUE, powerPoints: 7, },
    'Jolteon': { rank: PokemonPieceRank.BLUE, powerPoints: 7, },
    'Kabuto': { rank: PokemonPieceRank.BLUE, powerPoints: 7, },
    'Mr. Mime': { rank: PokemonPieceRank.BLUE, powerPoints: 7, },
    'Nidoking': { rank: PokemonPieceRank.BLUE, powerPoints: 7, },
    'Nidoqueen': { rank: PokemonPieceRank.BLUE, powerPoints: 7, },
    'Ninetales': { rank: PokemonPieceRank.BLUE, powerPoints: 7, },
    'Omanyte': { rank: PokemonPieceRank.BLUE, powerPoints: 7, },
    'Persian': { rank: PokemonPieceRank.BLUE, powerPoints: 7, },
    'Primeape': { rank: PokemonPieceRank.BLUE, powerPoints: 7, },
    'Vaporeon': { rank: PokemonPieceRank.BLUE, powerPoints: 7, },
    'Vileplume': { rank: PokemonPieceRank.BLUE, powerPoints: 7, },
    'Wartortle': { rank: PokemonPieceRank.BLUE, powerPoints: 7, },

    'Aerodactyl': { rank: PokemonPieceRank.RED, powerPoints: 6, },
    'Alakazam': { rank: PokemonPieceRank.RED, powerPoints: 6, },
    'Arcanine': { rank: PokemonPieceRank.RED, powerPoints: 6, },
    'Dewgong': { rank: PokemonPieceRank.RED, powerPoints: 6, },
    'Dragonair': { rank: PokemonPieceRank.RED, powerPoints: 6, },
    'Electabuzz': { rank: PokemonPieceRank.RED, powerPoints: 6, },
    'Exeggutor': { rank: PokemonPieceRank.RED, powerPoints: 6, },
    'Kabutops': { rank: PokemonPieceRank.RED, powerPoints: 6, },
    'Kangaskhan': { rank: PokemonPieceRank.RED, powerPoints: 6, },
    'Lapras': { rank: PokemonPieceRank.RED, powerPoints: 6, },
    'Magmar': { rank: PokemonPieceRank.RED, powerPoints: 6, },
    'Omastar': { rank: PokemonPieceRank.RED, powerPoints: 6, },
    'Onix': { rank: PokemonPieceRank.RED, powerPoints: 6, },
    'Rapidash': { rank: PokemonPieceRank.RED, powerPoints: 6, },
    'Rhydon': { rank: PokemonPieceRank.RED, powerPoints: 6, },
    'Scyther': { rank: PokemonPieceRank.RED, powerPoints: 6, },

    'Blastoise': { rank: PokemonPieceRank.RED, powerPoints: 7, },
    'Chansey': { rank: PokemonPieceRank.RED, powerPoints: 7, },
    'Charizard': { rank: PokemonPieceRank.RED, powerPoints: 7, },
    'Dragonite': { rank: PokemonPieceRank.RED, powerPoints: 7, },
    'Gengar': { rank: PokemonPieceRank.RED, powerPoints: 7, },
    'Gyrados': { rank: PokemonPieceRank.RED, powerPoints: 7, },
    'Machamp': { rank: PokemonPieceRank.RED, powerPoints: 7, },
    'Snorlax': { rank: PokemonPieceRank.RED, powerPoints: 7, },
    'Tauros': { rank: PokemonPieceRank.RED, powerPoints: 7, },
    'Venusaur': { rank: PokemonPieceRank.RED, powerPoints: 7, },

    'Articuno': { rank: PokemonPieceRank.YELLOW, powerPoints: 8, attackStrength: 9, },
    'Moltres': { rank: PokemonPieceRank.YELLOW, powerPoints: 8, attackStrength: 9, },
    'Zapdos': { rank: PokemonPieceRank.YELLOW, powerPoints: 8, attackStrength: 9, },
    'Mewtwo': { rank: PokemonPieceRank.YELLOW, powerPoints: 9, attackStrength: 9, },
}

/**
 * 
 */
const pieceConfigByRank: { [key in PokemonPieceRank]?: {
    numDiceRolls: number, 
    attackStrength: { [att: string] : number }, 
    attackStrengthOptions: number[] 
}} = {
    [PokemonPieceRank.PINK]: {
        numDiceRolls: 3,
        attackStrength: {
            '1': 2/7,
            '2': 3/7,
            '3': 2/7,
        },
        attackStrengthOptions: [1, 2, 3],
    },
    [PokemonPieceRank.GREEN]: {
        numDiceRolls: 2,
        attackStrength: {
            '3': 2/9,
            '4': 4/9,
            '5': 3/9,
        },
        attackStrengthOptions: [3, 4, 5],
    },
    [PokemonPieceRank.BLUE]: {
        numDiceRolls: 2,
        attackStrength: {
            '5': 0.375,
            '6': 0.375,
            '7': 0.25,
        },
        attackStrengthOptions: [5, 6, 7],
    },
    [PokemonPieceRank.RED]: {
        numDiceRolls: 1,
        attackStrength: {
            '7': 0.5,
            '8': 0.5,
        },
        attackStrengthOptions: [7, 8],
    },
}

/**
 * 
 * @param rank 
 * @returns 
 */
const getConfigsByRank = (rank: PokemonPieceRank): { diceRolls: number[], attackStrength: number } => {
    if (rank === PokemonPieceRank.YELLOW) {
        return {
            diceRolls: [6],
            attackStrength: 8,
        };
    }

    const config = pieceConfigByRank[rank];
    if (!config) {
        return {
            diceRolls: [],
            attackStrength: 0,
        };
    }

    const diceRolls: number[] = [];
    while (diceRolls.length < config.numDiceRolls) {
        let roll = randomInteger(1, 7);
        while (diceRolls.includes(roll)) {
            roll = randomInteger(1, 7);
        }
        diceRolls.push(roll);
    }

    const attackStrength = config.attackStrengthOptions[randomInteger(0, config.attackStrengthOptions.length)];

    return { diceRolls, attackStrength };
}

/**
 * 
 */
const starterPokemonPieces: PokemonPiece[] = Object.keys(starterPieceByName).map(name => {
    const { rank, powerPoints, attackStrength } = starterPieceByName[name];
    const { id, sprite_url } = pokemonSpriteByName[name];

    return {
        id,
        name,
        rank,
        powerPoints,
        attackStrength,
        spriteUrl: sprite_url,
    };
});

/**
 * 
 */
const wildPokemonPieces: WildPokemonPiece[] = Object.keys(wildPieceByName).map(name => {
    const { rank, powerPoints, attackStrength: existingAttack } = wildPieceByName[name];
    const { id, sprite_url } = pokemonSpriteByName[name];

    const { diceRolls, attackStrength } = getConfigsByRank(rank);

    return {
        id,
        name,
        rank,
        powerPoints,
        attackStrength: existingAttack || attackStrength,
        spriteUrl: sprite_url,
        diceRolls,
    };
});

export { starterPokemonPieces, wildPokemonPieces } 