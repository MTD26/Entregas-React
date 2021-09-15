import React, { useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { tarea } from "./../../utils/promesas";




function ItemDetailContainer(props){
    const [productoDetalle, setProductoDetalle] = useState({})
  
    const id = props.match.params.id;
   
    const promise =  new Promise((resolve, reject)=>{
        const foundProduct = productos.find((p)=> p.id === parseInt(id));
        if (foundProduct){
            resolve(foundProduct)
        }else{
            reject('product not found')
        }
    })
   
    const [productos, setProductos] = useState([])
    useEffect(()=>{
        tarea.then(
            (resp => setProductos(resp) )
        )
        
    },[])
    console.log(productos)

    useEffect(()=>{
            promise.then(res => setTimeout(()=> setProductoDetalle(res), 1500)
            .catch(err => console.log(err)) )
        }
    )

    return (
        <>
         <ItemDetail producto={productoDetalle} />
         {/* { productos.map((producto)=>  <ItemDetail producto={producto} />  )  } */}
        </>
        
    )
    }

    export default ItemDetailContainer
