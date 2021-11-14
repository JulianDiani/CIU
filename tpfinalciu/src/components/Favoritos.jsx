import React from 'react'
import { Fragment } from 'react';
import InfoPokemon from "./InfoPokemon";

const Favoritos = ({favoritos}) => {
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
                                
                            />
                        )
                    )
                }
            </div>
        </Fragment>

     );
}
 
export default Favoritos;