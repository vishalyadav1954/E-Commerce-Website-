import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Details from './pages/Deatails';
import CheckOut from './pages/CheckOut';
import ContactUs from './pages/ContactUs';
import { Provider} from 'react-redux';
import store from './apps/store';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <>
 <Provider store={store}>
<BrowserRouter>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/shop' element={<Shop/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/detail' element={<Details/>}/>
  <Route path='/checkout' element={<CheckOut/>}/>
  <Route path='/contactus' element={<ContactUs/>}/>
</Routes>
</BrowserRouter>
</Provider>
 </>
);
