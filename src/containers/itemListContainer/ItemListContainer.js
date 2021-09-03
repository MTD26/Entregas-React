import React, { useState } from 'react'
import { tarea } from '../../../utils/promesas'

const ItemListContainer = () =>{

    const [items, setItems]= useState([])

    useEffect(() => {
        tarea
        .then((resp)=> setItems(resp))
    ,[]});

    console.log(items)
   
    return (
    <div>
        
    </div>
    
    
    )
    
} 


export default ItemListContainer
