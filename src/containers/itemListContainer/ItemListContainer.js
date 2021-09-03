import React, { useState } from 'react'
import { tarea } from '../../../utils/promesas'

const productos = [
    { id: 1, nombre: 'remera', precio: 1 },
    { id: 2, nombre: 'pantalon', precio: 1 },
    { id: 3, nombre: 'buso', precio: 1 }
  ];

const tarea = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
});

const ItemListContainer = () =>{

    const [items, setItems]= useState([])

    useEffect(() => {
        tarea
        .then((resp)=> setItems(resp))
    });
    console.log(items)
   
    return (
    <>
    
    </>
    )
    
} 


export default ItemListContainer
