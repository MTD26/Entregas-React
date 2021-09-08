import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/itemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer';
import { AppContador } from './components/ItemCount';
import React, {useState} from 'react'
import { AppContext } from './context/cartContext';


function App() {

  const [producto, setProducto] = useState()

  return (
    <>
    
    <AppContext.Provider value={{producto, setProducto}}/>
    <NavBar />
    
    <ItemListContainer/>
    <ItemDetailContainer />
    
    {/* <AppContador/> */}
   
    </>
  );
}

export default App;
