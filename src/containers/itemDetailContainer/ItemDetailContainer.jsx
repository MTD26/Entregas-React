import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { tarea } from "./../../utils/promesas";



function ItemDetailContainer(){
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
