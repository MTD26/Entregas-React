const productos = [
    { id: "1", name: "Producto 1", url:'https://ferreira.vteximg.com.br/arquivos/ids/375704-540-540/new_W306NY001430.jpg?v=637535692039130000', categoria: "gorra" , price: 37 },
    { id: "2", name: "Producto 2", url:'https://ferreira.vteximg.com.br/arquivos/ids/375704-540-540/new_W306NY001430.jpg?v=637535692039130000', categoria: "gorra" , price: 27 },
    { id: "3", name: "Producto 3", url:'https://ferreira.vteximg.com.br/arquivos/ids/375704-540-540/new_W306NY001430.jpg?v=637535692039130000', categoria: "gorra" , price: 40 },
    { id: "4", name: "Producto 4", url:'https://ferreira.vteximg.com.br/arquivos/ids/375704-540-540/new_W306NY001430.jpg?v=637535692039130000', categoria: "gorra" , price: 55 },
    { id: "5", name: "Producto 5", url: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', categoria: "remera" , price: 11 },
    { id: "6", name: "Producto 6", url: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', categoria: "remera" , price: 19 },
    { id: "7", name: "Producto 7", url: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', categoria: "remera" , price: 2 }
  ];

  function getProductos(id) {
    if (id===undefined) {
        return productos
    }else{
        return productos.find( producto=> producto.id === id)
    }
}

export let tarea = new Promise((resolve) => {
    //console.log("ejecutando promesa") 
    setTimeout(() => {
        resolve(getProductos());        
    }, 2000);
})
