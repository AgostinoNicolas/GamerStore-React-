import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import NavBar from './components/Navbar';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />}/>
          <Route path="/item/:idItem" element={<ItemDetailContainer />}/>
          <Route path="cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
