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
    setFavoritos([...favoritos, pokemonParam]);
  }

  return (
    <Fragment>
      <Header />
      <Buscador
        guardarPokemon={setPokemon}
      />
      {pokemon && <InfoPokemon pokemon={pokemon} agregarFavorito={agregarFavorito} />}
      <Favoritos favoritos={favoritos} />
    </Fragment>
  );
}

export default App;
