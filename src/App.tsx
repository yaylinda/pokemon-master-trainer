import { AppBar, Avatar, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { GameCookies } from './commonTypes';
import { generateTrainerName, POKEMON_MASTER_TRAINER_COOKIE_NAME } from './constants';
import GamePage from './routes/game/GamePage';
import LandingPage from './routes/landing/LandingPage';

function App() {

    const [cookies, setCookie, removeCookie] = useCookies([POKEMON_MASTER_TRAINER_COOKIE_NAME]);

    const [gameCookies, setGameCookies] = useState<GameCookies | null>(null);

    useEffect(() => {
        const existingGameCookies = cookies[POKEMON_MASTER_TRAINER_COOKIE_NAME] as GameCookies;
        if (!existingGameCookies) {
            const newGameCookies = {
                cookieId: uuidv4(),
                displayName: generateTrainerName(),
            };

            console.log(`[App][useEffect] setting newGameCookies: ${JSON.stringify(newGameCookies)}`);
            setCookie(POKEMON_MASTER_TRAINER_COOKIE_NAME, newGameCookies);
            setGameCookies(newGameCookies);
        } else {
            setGameCookies(existingGameCookies);
            console.log(`[App][useEffect] setting cookies from existingGameCookies: ${JSON.stringify(existingGameCookies)}`);
        }
    }, []);

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Avatar src={`${process.env.PUBLIC_URL}/pokeball.png`} sx={{ backgroundColor: 'white', marginRight: 2 }} />
                    <Typography variant="h6" component="div">
                        Pokemon Master Trainer
                    </Typography>
                    <Avatar src={`${process.env.PUBLIC_URL}/pokeball.png`} sx={{ backgroundColor: 'white', marginLeft: 2 }} />
                </Toolbar>
            </AppBar>

            {
                gameCookies ? (
                    <Routes>
                        <Route path="/" element={<LandingPage gameCookies={gameCookies} />} />
                        <Route path="game/:id" element={<GamePage gameCookies={gameCookies} />} />
                    </Routes>
                ) : null
            }
        </>
    );
}

export default App;
