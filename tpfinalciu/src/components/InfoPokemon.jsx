

function InfoPokemon({pokemon, agregarFavorito, isFavoritos = false}) {
    const { name, weight, abilities, types, sprites } = pokemon
    return (
        <div>
            <div>
                <div>nombre: {name}</div>
                <div>peso: {weight}</div>
                <div>
                    habilidades: {
                        abilities.map(a => a.ability.name) + " "
                    }
                </div>
                <div>tipos: {types.map(t => t.type.name) + " "}</div>
                {!isFavoritos && <div>
                    <button type="button"
                        onClick={() => agregarFavorito(pokemon)}
                    >
                        agregarFavorito
                    </button>

                </div>}
                <div><img src={sprites.front_default} /></div>
            </div>
        </div>
    )
}

export default InfoPokemon