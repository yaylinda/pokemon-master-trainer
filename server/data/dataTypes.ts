export interface Game {
    status: GameStatus,
    createdAt: number, // timestamp in seconds,
    
}

export enum GameStatus {
    WAITING = 'WAITING',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED',
}