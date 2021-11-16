export const buscarPokemon= async (pokemon)=>{
    try {
        let pokemonAMinusculas=pokemon.toLowerCase();
        let url=`https://pokeapi.co/api/v2/pokemon/${pokemonAMinusculas}`
        const respuesta=await fetch(url)
        const poke=await respuesta.json()
        return poke
    } catch(e) {
       alert("El pokemon ingresado no existe.")
    }
}