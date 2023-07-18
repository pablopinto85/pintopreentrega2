import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from "react";
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from './ItemDetailContainer'
import CartPage from './cart';

const App = () => {
  return (
    <BrowserRouter>
    <div>
    <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}  />
        <Route path='/categoria/:categoria' element={<ItemListContainer/> } />
        <Route path='/detalles/:id' element={<ItemDetailContainer/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

