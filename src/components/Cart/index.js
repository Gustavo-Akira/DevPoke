import React, { useState } from 'react';
import { CartArea, CartHeader, CartBody, CartText, PokemonArea, PokemonItem, PokemonName, PokemonQuantity, PokemonChange, ChangeQt, ButtonArea } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
const Cart = ({setStatus}) => {
    const [show, setShow] = useState(false);
    
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.cart.pokemons) || [];
    const handleChange = (key,type) => {
        dispatch({
            type: 'CHANGE_POKEMON',
            payload:{key,type}
        })
    }
    const handlePurchase = () =>{
        dispatch({
            type: 'PURCHASE'
        })
        setStatus(true);
    }
    
    return(
        <CartArea>
            <CartHeader onClick={()=>setShow(!show)}>
                <CartText>
                    Cart
                </CartText>
            </CartHeader>
            <CartBody show={show}>
                <PokemonArea>
                {pokemons.map((item,index)=>(
                        <PokemonItem>
                            <PokemonName>{item.name}</PokemonName>
                            <PokemonQuantity>{item.qt}</PokemonQuantity>
                            <PokemonChange>
                                <ChangeQt onClick={()=>handleChange(item.name,'+')}>+</ChangeQt>
                                <ChangeQt onClick={()=>handleChange(item.name,'-')}>-</ChangeQt>
                            </PokemonChange>
                        </PokemonItem>
                    ))}
                </PokemonArea>
                <ButtonArea>
                    <Button text="Finalizar" onClick={handlePurchase} />
                </ButtonArea>
            </CartBody>
        </CartArea>
    );
}

export default Cart;