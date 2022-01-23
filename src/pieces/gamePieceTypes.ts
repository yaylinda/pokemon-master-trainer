export interface PokemonPiece {
    id: number,
    name: string,
    rank: PokemonPieceRank,
    powerPoints: number,
    attackStrength: number,
}

export interface WildPokemonPiece extends PokemonPiece {
    diceRoll: number[],
}

export enum PokemonPieceRank {
    STARTER,
    PINK,
    GREEN,
    BLUE,
    RED,
    YELLOW
}

export interface PokemonPieceAttack {
    name: string,
    strength: number,
}