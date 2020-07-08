import React from 'react';
import { Container, GeneralistButton } from './styled';

const Button = ({onClick, text}) => {
    return(
        <Container>
            <GeneralistButton onClick={onClick}>
                {text}
            </GeneralistButton>
        </Container>
    );
}

export default Button;