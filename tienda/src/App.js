import Header from "./components/Header";
import Footer from "./components/Footer";
import { Fragment, useState } from "react";
import Producto from "./components/Producto";
import Changuito from "./components/Changuito";

function App() {

  const [productos,guardarProductos]=useState([
    {id:1,articulo:"Big Mac", precio:900,cantidad:0},
    {id:2,articulo:"Pollo crispy", precio:500,cantidad:0},
    {id:3,articulo:"Big veggie", precio:850,cantidad:0},
    {id:4,articulo:"Coca cola", precio:200,cantidad:0}
  ]);

  const [changuito,agregarProducto]=useState([])

  return (
    <Fragment>
      <Header />
      
      <h1>Hamburguesas plagio SA</h1>
      {productos.map(producto=>(<Producto
        key={producto.id}
        producto={producto}
        productos={productos}
        changuito={changuito}
        agregarProducto={agregarProducto}
        
      />))}
      <Changuito 
      changuito={changuito}
      agregarProducto={agregarProducto}
      />
      <Footer 
      anio={2021}
      />
    </Fragment>
  );
}

export default App;