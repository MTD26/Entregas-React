import React, { useState , useEffect} from 'react'
import { tarea } from '../../utils/promesas'
import ItemList from '../ItemList'

const ItemListContainer = () =>{

    const [items, setItems]= useState([])

    useEffect(() => {
        tarea
        .then((resp)=> setItems(resp))
    },[]);

    console.log(items)
   
    return (
    <>
    <ItemList items={items} />
    </>
    
    
    )
    
} 


export default ItemListContainer
