import React, { useState } from 'react';


export function AppContador() {

  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(10);
  
  
  const handlerClickSuma=()=>{
    
    if (stock>0){
    setCount(count + 1);
    setStock(stock - 1);
    
  }
  };

  const handlerClickResta=()=>{
    if (count>0){
      setCount(count - 1);
      setStock(stock + 1);
    }
    
}


  return (
    <div>
      <h1>Producto</h1>

      <button onClick={handlerClickResta}>-</button>
      <label>{count}</label>
      <button onClick={handlerClickSuma}>+</button>
      <label>Stock: {stock}</label>
    </div>
  );
};