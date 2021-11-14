import React from 'react'
import { Fragment } from 'react';
import InfoPokemon from "./InfoPokemon";

const Favoritos = ({favoritos,eliminarFavorito}) => {
    return ( 
        <Fragment>
            <div className="favoritos">
                <h3>Mis pokemon favoritos: </h3>
                {
                    favoritos.map(
                        (pokemon)=>(
                            <InfoPokemon
                                isFavoritos
                                key={pokemon.id}
                                pokemon={pokemon}
                                eliminarFavorito={eliminarFavorito}
                                
                            />
                        )
                    )
                }
            </div>
        </Fragment>

     );
}
 
export default Favoritos;