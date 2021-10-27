import React from 'react'
import { Fragment } from 'react';
import './changuito.css'
import Producto from './Producto';

const Changuito = ({changuito,agregarProducto}) => {
    return ( 
        <Fragment>
            <div className="changuito">
                <h3>Carrito</h3>
                {
                    changuito.map(
                        producto=>(
                            <Producto 
                            key={producto.id}
                            producto={producto}
                            changuito={changuito}
                            agregarProducto={agregarProducto}

                            />
                        )
                    )
                }
            </div>
        </Fragment>
     );
}
 
export default Changuito;