import React, { useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { tarea } from "./../../utils/promesas";



function ItemDetailContainer(props){
    const id = props.match.params.id;
    const promise =  new Promise((resolve, reject)=>{
        const foundProduct = productos.find((p)=> p.id === parseInt(id));
        if (foundProduct){
            resolve(foundProduct)
        }else{
            reject('product not found')
        }
    })
   
    const [productos, setProducto] = useState([])
    useEffect(()=>{
        tarea.then(
            (resp => setProducto(resp) )
        )
        
    },[])
    console.log(productos)
    return (
        <>
         
         { productos.map((producto)=>  <ItemDetail producto={producto} />  )  }
        </>
        
    )
    }

    export default ItemDetailContainer
