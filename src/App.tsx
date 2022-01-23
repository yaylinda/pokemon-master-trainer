import React, { useEffect, useState } from 'react';
import { AppBar, Avatar, Container, TextField, Toolbar, Typography } from '@mui/material';
import LandingPage from './landing/LandingPage';
import GamePage from './game/GamePage';
import { Route, Routes } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { v4 as uuidv4 } from 'uuid';
import { POKEMON_MASTER_TRAINER_COOKIE_NAME } from './constants';

function App() {

    const [cookies, setCookie, removeCookie] = useCookies([POKEMON_MASTER_TRAINER_COOKIE_NAME]);

    const [cookieId, setCookieId] = useState<string>('');

    useEffect(() => {
        const existingCookieValue = cookies[POKEMON_MASTER_TRAINER_COOKIE_NAME];
        if (!existingCookieValue) {
            const newCookieValue = uuidv4();
            console.log(`[App][useEffect] setting newCookieValue: ${newCookieValue}`);
            setCookie(POKEMON_MASTER_TRAINER_COOKIE_NAME, newCookieValue);
            setCookieId(newCookieValue);
        } else {
            setCookieId(existingCookieValue);
            console.log(`[App][useEffect] setting cookieId from existingCookieValue: ${existingCookieValue}`);
        }
    }, [cookies]);

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

            <Routes>
                <Route path="/" element={<LandingPage cookieId={cookieId} />} />
                <Route path="game/:id" element={<GamePage cookieId={cookieId} />} />
            </Routes>
        </>
    );
}

export default App;
