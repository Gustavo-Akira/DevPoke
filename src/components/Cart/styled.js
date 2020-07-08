import styled from 'styled-components';

export const CartArea = styled.div`
    position:fixed;
    bottom:25px;
    right: 30px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color:#FF0033;
    width:20%;
`;


export const CartBody = styled.div`
    display: ${props=>props.show ? 'block' : 'none'};
    color:#FFF;
`;

export const CartText = styled.div`
    font-size:17px;
    color:#FFF;
`;

export const CartHeader = styled.div`
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:space-around;
`;

export const PokemonArea = styled.div`
`;

export const PokemonName = styled.p` `;

export const PokemonQuantity = styled.p``;

export const PokemonItem = styled.div`
    display:flex;
    justify-content:space-around;
    border-top:1px solid #FFF;
`;

export const PokemonChange = styled.div`
    display:flex;
`;

export const ChangeQt = styled.p``;

export const ButtonArea = styled.div`
    display:flex;
    justify-content:center;
    height:10vh;
    border-top:1px solid #FFF;
    padding-bottom:10px;
`;