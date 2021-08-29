import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/itemListContainer';
import { AppContador } from './components/ItemCount';

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greetings='Bienvenido/a a la tienda!'/>
    <AppContador stock="hay"/>
    </>
  );
}

export default App;
