import React from 'react';
import estrellita from './imagenes/estrellita.png'

const InfoPokemon=({pokemon, agregarFavorito,eliminarFavorito, isFavoritos = false})=> {
    const { name, weight, abilities, types, sprites } = pokemon
    return (
        <div className="flex py-1 px-1 justify-center bg-red-300 ">
            
            <div className="border border-black rounded-md bg-yellow-300 w-64 text-center ">
                <div>Nombre: {name}</div>
                <div>Peso: {weight}</div>
                <div>
                    Habilidades: {
                        abilities.map(a => a.ability.name) + " "
                    }
                </div>
                <div>Tipo/s: {types.map(t => t.type.name) + " "}</div>
                <div className="flex justify-center"><img src={sprites.front_default} alt="Imagen" /></div>
                {!isFavoritos ? <div className="flex justify-center py-2  ">
                    <button type="button"
                        onClick={() => agregarFavorito(pokemon)}
                        className="border border-black rounded-md flex flex-wrap justify-center hover:bg-blue-600 bg-red-600"
                        name="favorito"
                    >
                        Favorito
                        <img src={estrellita} alt="" className="border-transparent" /> 
                    </button>

                </div>:

                <div className="py-2"><button
                type="button"
                className="border border-black rounded-md hover:bg-blue-600 bg-red-600"
                onClick={()=>eliminarFavorito(pokemon)}
               
                >
                    Eliminar favorito
                    
                </button></div>
                
                
                }
                
            </div>
        </div>
    )
}

export default InfoPokemon