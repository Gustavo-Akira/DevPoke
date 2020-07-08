import React,{useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Menu, Footer, Container, Content } from './AppStyle';
import MenuItem from './components/MenuItem';
import Cart from './components/Cart';
import Modal from './components/Modal'
import PurchaseModal from './components/PurchaseModal';
function App() {
  const [status, setStatus] = useState(false);
  return (
    <BrowserRouter>
      <Container>
        <Menu>
          <MenuItem />
        </Menu>
        <Content>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/unique">
            
          </Route>
        </Content>
        <Cart setStatus={setStatus}/>
        <Footer>
          Footer
        </Footer>
        <Modal status={status} setStatus={setStatus}>
          <PurchaseModal />
        </Modal>
      </Container>
    </BrowserRouter>
  );
}

export default App;
