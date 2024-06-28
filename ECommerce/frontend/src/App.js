import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div >
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/kids' element={<ShopCategory category="Kids"/>}/> 
        <Route path='/elders' element={<ShopCategory category="Elders"/>}/>
        <Route path='/aged' element={<ShopCategory category="Aged"/>}/>
        <Route path='product' element={<Product/>}>
        <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
         </div>
  );
}

export default App;
