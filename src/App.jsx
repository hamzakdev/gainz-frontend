import React, { useEffect } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Contact from '../src/pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleProduct from './pages/SingleProduct';
import AllProducts from './pages/AllProducts';
import LoginPage from './pages/LoginPage';
import { useDispatch } from 'react-redux';
import { getMe } from './apiCalls/userApi';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Warning from './components/Warning';


const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
   getMe(dispatch)
  }, [dispatch  ])

  return (
    <div>
    <BrowserRouter>
      <Navbar />
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="product/:id" element={ <SingleProduct/> } />
        <Route path="all/" element={ <AllProducts/> } />
        <Route path="all/:search" element={ <AllProducts/> } />
        <Route path="/login" element={ <LoginPage />}/>
        <Route path="/profile" element={ <Profile />}/>
        <Route path="/cart" element={ <Cart />}/>
      </Routes>
      <Warning />
    </BrowserRouter>
    </div>
  )
}

export default App