import React, { useState } from 'react';


export function AppContador() {

  const [count, setCount] = useState(0);
  
  
  const handlerClickSuma=()=>{
    setCount(count + 1);
  };

  const handlerClickResta=()=>{
    setCount(count - 1);
}


  return (
    <div>
      <h1>Producto</h1>

      <button onClick={handlerClickResta}>-</button>
      <label>{count}</label>
      <button onClick={handlerClickSuma}>+</button>
    </div>
  );
};