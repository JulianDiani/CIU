export const buscarPokemon= async (pokemon)=>{
    try {
        let url=`https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const respuesta=await fetch(url)
        const poke=await respuesta.json()
        return poke
    } catch(e) {
       alert("El pokemon ingresado no existe.")
    }
}