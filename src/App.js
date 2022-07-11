import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import {CartProvider} from './components/store/CartContext';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='home' element={<ItemListContainer />}></Route>
            <Route path='/category/:category' element={<ItemListContainer />}></Route>
            <Route path='/details/:id' element={<ItemDetailContainer />}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
        </div>
    </CartProvider>
  );
}

export default App;
