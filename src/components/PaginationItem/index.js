import React from 'react';
import { Container } from './styled';

const PaginationItem = ({children,setActivePage,active,page}) =>{
    return(
        <Container active={active === page} onClick={setActivePage}>
            {children}
        </Container>
    )
};

export default PaginationItem;