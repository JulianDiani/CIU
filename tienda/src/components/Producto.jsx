import React from 'react'
import { Fragment } from 'react'



const Producto = ({producto,productos,changuito,agregarProducto}) => {
    const {id,articulo,precio,cantidad}=producto
    const seleccionarProducto = (id) => {
        const productoAAgregar=productos.filter(p=>p.id===id)[0];
        const productoEnElChanguito=changuito.filter(p=>p.id===productoAAgregar.id)[0];
        if(productoEnElChanguito!=null){
            productoEnElChanguito.cantidad+=1;
        }
        else{
            agregarProducto([...changuito,productoAAgregar]);
            productoAAgregar.cantidad+=1;
        }
        

    }
    
    const eliminarProducto=(id)=>{
        const productoAEliminar=changuito.filter(p=>p.id===id)[0]
        const productosDistintos=changuito.filter(p=>p.id!==id)
        if(productoAEliminar.cantidad===1){
            agregarProducto(productosDistintos)
        }
        else{
            productoAEliminar.cantidad-=1
        }
      /*  const productos=changuito.filter(
            p=>p.id===id)
        agregarProducto(productos);
    */
    }

    return (  
        <Fragment>
            <div>
            <h3>
                {id}-{articulo}-{precio}-{cantidad}</h3>
                {
                    productos
                    ?
                <button
                type="button"
                onClick={()=>seleccionarProducto(id)}
                >Comprar</button>
                :
                <button
                type="button"
                onClick={()=>eliminarProducto(id)}
                
                >Quitar</button>
                }
                
            
            </div>
        </Fragment>
    );
}
 
export default Producto;
