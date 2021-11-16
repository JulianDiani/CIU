import { useState } from "react";
import { Fragment } from "react";
import Header from "./components/header";
import Buscador from "./components/Buscador";
import Favoritos from "./components/Favoritos";
import InfoPokemon from "./components/InfoPokemon";


function App() {
  const [favoritos, setFavoritos] = useState([]);
  const [pokemon, setPokemon] = useState();

  const agregarFavorito = (pokemonParam) => {
    
    const estaEnFavoritos=favoritos.filter(p=>p===pokemonParam).length>0
    if (!estaEnFavoritos){
      setFavoritos([...favoritos, pokemonParam]);
    }
  }
  const eliminarFavorito = (pokemonParam) => {
    const listaNueva = favoritos.filter(f=>f!==pokemonParam)
    setFavoritos(listaNueva)
  }
  
 

  return (
    <Fragment>
      <Header />
      <div className="bg-red-300" style={{height:"90vh"}}> 
      <Buscador
        guardarPokemon={setPokemon}
      />
      {pokemon && <InfoPokemon pokemon={pokemon} agregarFavorito={agregarFavorito} eliminarFavorito={eliminarFavorito} />}
      
      <Favoritos favoritos={favoritos}
      eliminarFavorito={eliminarFavorito} />

      </div>
      
    </Fragment>
  );
}

export default App;
