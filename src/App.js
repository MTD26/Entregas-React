import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/itemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer';
import { AppContador } from './components/ItemCount';
import React, {useState} from 'react'
import { AppContext } from './context/cartContext';
import {BrowserRouter, Switch, Route} from 'react-router-dom'



function App() {

  const [producto, setProducto] = useState()

  return (
    <BrowserRouter>
    
    <AppContext.Provider value={{producto, setProducto}}/>
    <NavBar />
    <Switch>
    <Route exact path="/">
    <ItemListContainer />
    </Route>
    <Route exact path="/productos/:id">
    <ItemDetailContainer />
    </Route>
    <Route>
    
    </Route>
    {/* <AppContador/> */}
    </Switch>
    </BrowserRouter>
  );
}

export default App;
