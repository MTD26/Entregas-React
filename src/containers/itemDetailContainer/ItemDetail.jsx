import { AppContador } from "../../components/ItemCount"


function ItemDetail( {producto}  ) {
    
    console.log()

    return (
        <>
        <div>
          <h2>{producto.name}</h2>
          <div class="card" class="my-element">
          <img class="card-img-top" src={producto.url} alt="Card image cap"/>
          <div class="card-body">
            
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <AppContador/>
          <a href="#" class="btn btn-dark" >Agregar al carrito</a>
          </div>
          </div>
          </div>
        </> )
}

export default ItemDetail
