import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { LandingPageProps } from './landingPageTypes';

function LandingPage({ gameCookies }: LandingPageProps) {

    const createNewGame = () => {

    }

    return (
        <Container>
            <Typography variant="h3" component="div">
                Welcome to Pokemon Master Trainer Online!
            </Typography>
            <Typography variant="h4" component="div">
                Your name is: {gameCookies.displayName}
            </Typography>

            <Button variant="contained" onClick={createNewGame}>Start New Game</Button>
        </Container>
    );
}

export default LandingPage;