import { useState } from "react";
import { Fragment } from "react";
import Header from "./components/header";
import Buscador from "./components/Buscador";
import Favoritos from "./components/Favoritos";


function App() {
  const [favoritos,agregarFavorito]=useState([]);
  

  
  return (
    <Fragment>
      <Header/>
      <Buscador
        favoritos={favoritos}
        agregarFavorito={agregarFavorito}
      />
      <Favoritos 
      favoritos={favoritos}
      agregarFavorito={agregarFavorito}
      />
    </Fragment>
  );
}

export default App;
