// import "./App.css"
import Formulario from "../components/Formulario"
import Container from "../components/Container";
import Routers from "./Routers";
import Banner from "../components/Banner"
import { useState, useEffect } from "react";

export const Productos = () => {
  const [comprados, setComprados] = useState([]);
  
  useEffect(() => {
    fetch("productos.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.famosos && Array.isArray(data.famosos)) {
          setComprados(data.famosos);
        } else {
          console.error("La categoría 'famosos' no existe en el archivo productos.json.");
        }
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);
  
    return (
      <>
      {/* AQUI VA EL BANNER  */}
        <Banner/>

       {/* AQUI VA EL HEADER */}
        <Routers/>

    <h2>Nuestros productos más comprados</h2>
    <div className="contenedor">
        <figure>
            <img src="public/img/variedad.jpg" alt="Panes"/>
            <div className="cap">
                <h3>Panes</h3>
                <p>Ofrecemos pan de agua, sobao, integral, etc.</p>
            </div>
        </figure>
    </div>

    {Array.isArray(comprados) ? (
        comprados.map((item, id) => (
          <Container key={id} imgUrl={item.imagen} name={item.nombre} precio={item.precio}/>
        ))
      ) : (
        <p>No hay productos disponibles</p>
      )}
  <h2 id="psa">
  hola
  </h2>
  <Formulario/>
      </>
    )
  }
  
export default Productos