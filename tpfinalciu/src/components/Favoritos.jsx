import React from 'react'
import { Fragment } from 'react';
import InfoPokemon from "./InfoPokemon";

const Favoritos = ({favoritos,eliminarFavorito}) => {
    return ( 
        <Fragment>
            <div className="favoritos ">
                <h3>Mis pokemon favoritos: </h3>
                <div className="">
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
                
            </div>
        </Fragment>

     );
}
 
export default Favoritos;