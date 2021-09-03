import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/itemListContainer/ItemListContainer';
import { AppContador } from './components/ItemCount';
import React from 'react'


function App() {
  return (
    <>
    
    <NavBar />
    
    <ItemListContainer/>
    
    {/* <AppContador/> */}
   
    </>
  );
}

export default App;
