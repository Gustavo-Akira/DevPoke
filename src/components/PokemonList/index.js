import React from 'react';
import PokemonItem from '../PokemonItem';
import { Containter } from './styled';

const PokemonList = ({pokemons})=>{
    return(
        <Containter>
            {pokemons.map((p,key)=><PokemonItem key={key} pokemon={p}/>)}
        </Containter>
    );
}

export default PokemonList;