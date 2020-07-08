import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid black;
    margin-right:10px;
    padding:5px 10px;
    margin-top:10px;
    background-color:${props=>props.active?'#AAA':'#FFF'}
`;