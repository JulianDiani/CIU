import React from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import './Changuito.css'
import Producto from './Producto';

const Changuito = ({changuito,agregarProducto}) => {
    return ( 
        <Fragment>
            <div className="changuito">
                <h3>Carrito</h3>
                {
                    changuito.map(
                        (producto,posicion)=>(
                            <Producto
                            key={posicion}
                            producto={producto}
                            changuito={changuito}
                            agregarProducto={agregarProducto}
                            cantidad={producto.cantidad}

                            />
                        )
                    )
                }
            </div>
        </Fragment>
     );
}
 
export default Changuito;