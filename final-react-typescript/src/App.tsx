import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { productsType } from './data/productsData';


function App() {
  function getCartFromLocal() {
    const localCart = localStorage.getItem('cart')
    if (localCart) {
      return JSON.parse(localCart)
    }
    else {
      return []
    }
  }
  const [cart, setCart] = React.useState<productsType[]>(getCartFromLocal)
  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  return (
    <Router>
      <Routes>
        <Route element={<Layout cartLength={cart.length} />}>
          <Route path='/' element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products cartProducts={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cartProducts={cart} setCart={setCart} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
