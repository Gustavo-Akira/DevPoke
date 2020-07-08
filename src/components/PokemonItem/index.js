import React from 'react';
import { Container } from './styled';
import Button from '../Button';
import { useDispatch } from 'react-redux';

const PokemonItem = ({pokemon})=>{
    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch({type:'ADD_POKEMON',payload:{name:pokemon.name}})
    };
    return(
        <Container>
            {pokemon.name}
            <Button text="Buy Now" onClick={handleClick}/>
        </Container>
    );
}

export default PokemonItem;