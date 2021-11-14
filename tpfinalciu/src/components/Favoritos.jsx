import React from 'react'
import { Fragment } from 'react';
import Buscador from './Buscador';

const Favoritos = ({favoritos,agregarFavorito}) => {
    return ( 
        <Fragment>
            <div className="favoritos">
                <h3>Favoritos</h3>
                {
                    favoritos.map(
                        (pokemon,posicion)=>(
                            <Buscador
                            key={posicion}
                            pokemon={pokemon}
                            favoritos={favoritos}
                            agregarFavorito={agregarFavorito}
                            />
                        )
                    )
                }
            </div>
        </Fragment>

     );
}
 
export default Favoritos;