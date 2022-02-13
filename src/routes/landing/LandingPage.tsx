import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useUserStore } from '../../stores/userStore';

function LandingPage() {

    const { user } = useUserStore();
    
    const createNewGame = () => {

    }

    if (!user) {
        return null;
    }

    return (
        <Container>
            <Typography variant="h3" component="div">
                Welcome to Pokemon Master Trainer Online!
            </Typography>
            <Typography variant="h4" component="div">
                Trainer Name: {user.username}
            </Typography>

            <Button variant="contained" onClick={createNewGame}>Start New Game</Button>
        </Container>
    );
}

export default LandingPage;