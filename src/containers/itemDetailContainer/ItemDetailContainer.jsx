import React, { useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { tarea } from "./../../utils/promesas";
import {useParams} from 'react-router-dom'




function ItemDetailContainer(){
    // había un props en el paréntesis
    // const [productoDetalle, setProductoDetalle] = useState({})
    
    const [producto, setProducto] = useState({})
    const {id} = useParams()
    
    useEffect(()=>{
        tarea.then(
            (resp => setProducto(resp.find((p)=> p.id === id)) )
        )
        
    },[])
    



    return (
        <>
         <ItemDetail producto={producto} />
         
        </>
        
    )
    }

    export default ItemDetailContainer
