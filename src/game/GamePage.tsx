import { Container } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router';
import { GamePageProps } from './gamePageTypes';

function GamePage({ cookieId }: GamePageProps) {
    const params = useParams();

    return (
        <Container>
            <div>Game Page: {params.id}</div>
        </Container>
    );
}

export default GamePage;