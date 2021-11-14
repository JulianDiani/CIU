

const InfoPokemon=({pokemon, agregarFavorito,eliminarFavorito, isFavoritos = false})=> {
    const { name, weight, abilities, types, sprites } = pokemon
    return (
        <div className="flex">
            <div className="border border-black rounded-md">
                <div>Nombre: {name}</div>
                <div>Peso: {weight}</div>
                <div>
                    Habilidades: {
                        abilities.map(a => a.ability.name) + " "
                    }
                </div>
                <div>Tipo/s: {types.map(t => t.type.name) + " "}</div>
                {!isFavoritos ? <div>
                    <button type="button"
                        onClick={() => agregarFavorito(pokemon)}
                        className="border border-black rounded-md"
                    >
                        agregarFavorito
                    </button>

                </div>:
                <button
                type="button"
                className="border border-black rounded-md"
                onClick={()=>eliminarFavorito(pokemon)}
               
                >
                    EliminarFavorito
                    
                </button>
                
                }
                <div><img src={sprites.front_default} alt="Imagen" /></div>
            </div>
        </div>
    )
}

export default InfoPokemon