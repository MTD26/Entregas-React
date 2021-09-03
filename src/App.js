import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import { AppContador } from './components/ItemCount';
import React from 'react'


function App() {
  return (
    <>
    
    <NavBar />
    
    <ItemListContainer greetings='Bienvenido/a a la tienda!!'/>
    
    <AppContador/>
   
    </>
  );
}

export default App;
