import React from 'react'
import { Fragment } from 'react'



const Producto = ({producto,productos,changuito,agregarProducto}) => {
    const {id,articulo,precio}=producto
    const seleccionarProducto = (id) => {
        const producto=productos.filter(p=>p.id===id)[0]
        agregarProducto([...changuito,producto]);

    }
    const eliminarProducto=(id)=>{
        const productos=changuito.filter(
            p=>p.id!==id)
        agregarProducto(productos);
    }

    return (  
        <Fragment>
            <div>
            <h3>
                {id}-{articulo}-{precio}</h3>
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
