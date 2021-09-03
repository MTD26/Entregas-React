import React from 'react'

function Item({item}) {

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
            <div key={item.id} class="card" class="my-element">
                 
                 <img class="my-element" src={item.url} class="card-img-top" alt="..."/>
                 <div class="card-body">
                 <h5 class="card-title">{item.name}</h5>
                 <p class="card-text">  ${item.price}</p>
                 <a href="#" class="btn btn-primary">Comprar</a>
                 </div>
            </div>
        </>
    )
}

export default Item

