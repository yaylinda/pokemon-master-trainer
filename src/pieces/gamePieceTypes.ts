export interface PokemonPiece {
    id: number,
    name: string,
    rank: PokemonPieceRank,
    powerPoints: number,
    attackStrength: number,
    spriteUrl: string,
}

export interface WildPokemonPiece extends PokemonPiece {
    diceRolls: number[],
}

export enum PokemonPieceRank {
    STARTER = 'STARTER',
    PINK = 'PINK',
    GREEN = 'GREEN',
    BLUE = 'BLUE',
    RED = 'RED',
    YELLOW = 'YELLOW',
}

export interface PokemonPieceAttack {
    name: string,
    strength: number,
}