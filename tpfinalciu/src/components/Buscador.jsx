import React from 'react'
import { useState } from 'react';
import Favoritos from './Favoritos';
import { buscarPokemon } from '../api';



const Buscador = ({favoritos=[],agregarFavorito}) => {
    const [pokemonABuscar,buscar]=useState("");
    const [pokemon,setPokemon]=useState();
    const onChange = (event) => {
        return ( 
            buscar(event.target.value)
         );
    }

    
    const onClick=async (e)=>{
        const pokemon=await buscarPokemon(pokemonABuscar);
        setPokemon(pokemon)
    }
    
     
    return ( 
        <div>
           <div>
               <input 
               
               type="text" placeholder="Pokenombre" 
               onChange={onChange}
               
               />
           </div>
           <div>
               <button
               onClick={onClick}
               >
                   Buscar
               </button>
           </div>
           <div>
               {  pokemon &&
               <div>
                   <div>nombre: {pokemon.name}</div>
                   <div>peso: {pokemon.weight}</div>
                 
                   <div>
                      habilidades: {
                           pokemon.abilities.map(a=>a.ability.name)+" "
                           }
                   </div>
                   <div>tipos: {pokemon.types.map(t=>t.type.name)+" "}</div>
                   {console.log(favoritos)}
                   <div>
                           <button type="button"
                                    onClick={()=>agregarFavorito([...favoritos,pokemon])}
                           >
                               agregarFavorito
                           </button>

                   </div>
                   <div><img src={pokemon.sprites.front_default}/></div>
               </div>
               }
           </div>
        </div>
     );
}
 
export default Buscador;