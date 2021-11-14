import React from 'react'
import { useState } from 'react';

import { buscarPokemon } from '../api';



const Buscador = ({guardarPokemon}) => {
    const [pokemonABuscar,buscar]=useState("");
    const onChange = (event) => {
        return ( 
            buscar(event.target.value)
         );
    }

    
    const onClick=async (e)=>{
        if (pokemonABuscar!==""){const pokemon=await buscarPokemon(pokemonABuscar);
        guardarPokemon(pokemon)
    }}
        
    
     
    return ( 
        <div className="flex items-center justify-center" >
           <div>
               <input                
               type="text" placeholder="Pokenombre" 
               onChange={onChange}
               className="border border-black rounded-md"               
               />
               <br />
           </div>
           <br />
           <div>
               <button
               onClick={onClick}
               className="border border-black rounded-md items-center"
               >
                   Buscar
               </button>
           </div>                     
        </div>
     );
}
 
export default Buscador;