import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/itemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer';
import { AppContador } from './components/ItemCount';
import React from 'react'


function App() {
  return (
    <>
    
    <NavBar />
    
    <ItemListContainer/>
    <ItemDetailContainer />
    
    {/* <AppContador/> */}
   
    </>
  );
}

export default App;
