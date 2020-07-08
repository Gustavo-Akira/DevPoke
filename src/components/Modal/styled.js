import styled from 'styled-components';

export const Container = styled.div`
    
    display:${props=>props.status === true? 'flex' : 'none'};
    position:fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    background-color:rgba(0,0,0,0.7);
    z-index:300;
    justify-content:center;
    align-items:center;
    width:100vw;
    height:100vh;
`;

export const ModalBody = styled.div`
    max-height:90vh;
    max-width:100vw;
    background-color:#FFF;
    border-radius: 20px;
    box-shadow: 0px 0px 50px #000;
    overflow:auto;
`;