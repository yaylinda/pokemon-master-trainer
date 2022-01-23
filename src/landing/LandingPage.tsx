import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { LandingPageProps } from './landingPageTypes';


function LandingPage({ cookieId }: LandingPageProps) {
    const [username, setUsername] = useState<string>();
    
    return (
        <Container>
            <Typography variant="h3" component="div">
                Welcome to Pokemon Master Trainer Online!
            </Typography>
            <Container sx={{ display: 'flex', flexDirection: 'row' }}>
                <Typography variant="h4" component="div">
                    What should we call you?
                </Typography>
                <TextField id="name" label="Name" variant="standard" onChange={e => setUsername(e.target.value)} />
            </Container>

            <Button variant="contained" >Join a Game</Button>
            <Button variant="contained" >Start New Game</Button>

        </Container>
    );
}

export default LandingPage;