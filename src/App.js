
import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/NavBarComp';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App(){
  return(
    <div className="App">
      <NavBarComp/> 
      <CartWidget/> 
      <ItemListContainer/> 
    </div>
    
  );
}

export default App; 
