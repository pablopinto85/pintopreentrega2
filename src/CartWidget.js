import './App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <Link to="/cart">
        <a className="nav-link" href="cart">
          <FaShoppingCart />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </a>
      </Link>
      <button onClick={handleAddToCart}>Agregar a la bolsa</button>
    </>
  );
};

export default CartWidget;