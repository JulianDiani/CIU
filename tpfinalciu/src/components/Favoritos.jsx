import React from 'react'
import { Fragment } from 'react';
import InfoPokemon from "./InfoPokemon";

const Favoritos = ({favoritos,eliminarFavorito}) => {
    return ( 
        <Fragment>
            <div className="bg-red-300">
                <h3 className="font-bold">Mis pokemon favoritos: </h3>
                
                <div className="flex flex-wrap bg-red-300 ">
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