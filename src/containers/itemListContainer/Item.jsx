import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import ItemDetail from '../itemDetailContainer/ItemDetail';

function Item({item}) {
    const {id, name, url, categoria, price} = item;

    return (
        <>
            {/* <div key={item.id} className='card w-50 mt-2'>
                <div className="card-header">
                    {item.name}
                </div>
                <div className="card-body">
                    <img src={item.price} alt='imagen' className='w-25' />
                </div>
                <div className="card-footer">
                    {`precio ${item.price}`}<br/>
                    
                </div>
            </div> */}
            <div key={id} class="card" class="my-element">
                 
                 <img class="my-element" src={url} class="card-img-top" alt="..."/>
                 <div class="card-body">
                 <h5 class="card-title">{name}</h5>
                 <p class="card-text">  ${price}</p>
                 <NavLink to={`/productos/${id}`}><a href="#" class="btn btn-dark" >Ver detalle</a></NavLink>
                 </div>
            </div>
        </>
    )
}

export default Item

