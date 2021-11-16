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
        <div>
        <div className="flex items-center justify-center bg-red-300 py-2" >
           
           <div className="py-2">
               <input                
               type="text" placeholder="Pokenombre/id" 
               onChange={onChange}
               className="border border-black rounded-md"               
               />
               <br />
           </div>
           <br />
           <div className="px-2">
               <button
               onClick={onClick}
               className="border border-black rounded-md items-center bg-red-600 px-2 hover:bg-blue-600"
               >
                   Buscar
               </button>
           </div>                     
        </div>
        <h1 className="text-center font-bold">Bienvenido/a a PokeApi, Ingresa el nombre/id de un pokemon, y obtene info sobre el!!</h1> 
        </div>
     );
}
 
export default Buscador;