import React from 'react'
import { useState } from 'react';
import Favoritos from './Favoritos';
import { buscarPokemon } from '../api';



const Buscador = ({guardarPokemon}) => {
    const [pokemonABuscar,buscar]=useState("");
    const onChange = (event) => {
        return ( 
            buscar(event.target.value)
         );
    }

    
    const onClick=async (e)=>{
        const pokemon=await buscarPokemon(pokemonABuscar);
        if (pokemon!=undefined){
            guardarPokemon(pokemon)

        }
        
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
        </div>
     );
}
 
export default Buscador;