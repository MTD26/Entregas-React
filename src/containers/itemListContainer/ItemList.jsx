import React from 'react'
import Item from './Item'

function ItemList({items}) {
    return (
        <>
           <div class="container-fluid">
           { items.map((item)=>  <Item item={item} />  )  }
            </div>
               
            
        </>
    )
}

export default ItemList 
