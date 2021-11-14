import React from 'react'
import { Fragment } from 'react';
import Buscador from './Buscador';
import InfoPokemon from "./InfoPokemon";

const Favoritos = ({favoritos}) => {
    return ( 
        <Fragment>
            <div className="favoritos">
                <h3>Favoritos</h3>
                {
                    favoritos.map(
                        (pokemon,posicion)=>(
                            <InfoPokemon
                                isFavoritos
                                key={posicion}
                                pokemon={pokemon}
                            />
                        )
                    )
                }
            </div>
        </Fragment>

     );
}
 
export default Favoritos;