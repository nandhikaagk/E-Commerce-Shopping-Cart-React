import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store.js'
import { Provider } from 'react-redux'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Counter from './Components/Counter.jsx'
import About from './Components/About.jsx'
import Products from './Components/Products.jsx'
import Cart from './Components/Cart.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
          <Route path='/home' element={<About/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/products' element={<Products/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
       
    </Provider>
  </React.StrictMode>,
)