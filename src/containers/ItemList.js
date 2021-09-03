import React from 'react'
import Item from '../Item/Item'

function ItemList({productos}) {
    return (
        <>
           <ul>
                { productos.map((item)=>  <Item item={item} />  )  }
            </ul>   
        </>
    )
}

export default ItemList 
