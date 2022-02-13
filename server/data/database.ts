import { collection, doc, setDoc, query, where, getDocs } from "firebase/firestore"; 

import { db } from '../../common/firebase';
import { Game } from '../../common/types';

const gamesRef = collection(db, "games");

export const getGamesByUserId = async (userId: string): Promise<Game[]> => {
    const q = query(gamesRef, where("players", "array-contains", userId));

    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
        return [];
    }

    const games: Game[] = [];

    querySnapshot.forEach((doc) => {
        games.push({
            id: doc.id,
            ...doc.data(),
        } as Game);
    });

    return games;
} 

export const getGameById = (gameId: string): Game | null => {
    // TODO
    return null;
}

export const createGame = (game: Game): Game | null => {
    // TODO
    return null;
}

export const updateGame = (game: Game): Game | null => {
    // TODO
    return null;
}
