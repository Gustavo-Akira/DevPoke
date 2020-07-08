import React from 'react';
import { Container, ModalBody } from './styled';

export default ({status,children,setStatus}) => {
    const handleclick =(e)=>{
        if(e.target.classList.contains('modalBg')){
            setStatus(false);
        }
    }
    return(
        <Container status={status} onClick={handleclick} className="modalBg">
            <ModalBody>
                {children}
            </ModalBody>
        </Container>
    );
}