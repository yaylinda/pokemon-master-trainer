import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppBar, Avatar, Toolbar, Typography } from '@mui/material';
import GamePage from './routes/game/GamePage';
import LandingPage from './routes/landing/LandingPage';

function App() {

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
                <Route path="/" element={<LandingPage />} />
                <Route path="game/:id" element={<GamePage />} />
            </Routes>
        </>
    );
}

export default App;
