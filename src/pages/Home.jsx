import "../App.css"
import Formulario from "../components/Formulario"
import Container from "../components/Container";
import Routers from "./Routers";
import Banner from "../components/Banner";
// import productos from '../productos.json';

import { useState, useEffect } from "react";

export const Home = () => {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch("/productos.json")
    .then((response) => response.json())
    .then((data) => {
      if (data && data.ofertas && Array.isArray(data.ofertas)) {
        setProductos(data.ofertas);
      } else {
        console.error("La categoría 'ofertas' no existe en el archivo productos.json.");
      }
    })
    .catch((error) => {
      console.error("Error al obtener los productos:", error);
    });
  
  }, []);
  
  return (
    <>

      {/* Aqui va el banner */}
      <Banner/>

      {/* Aqui va el header */}
      <Routers/>

    <h2>Noticias</h2>
    <p>¡Oferta Especial!</p>
    <p>Presentamos nuestros nuevos productos a buen precio</p>

    {/* Aqui van los productos */}
      {Array.isArray(productos) ? (
        productos.map((item, id) => (
          <Container key={id} imgUrl={item.imagen} name={item.nombre} precio={item.precio}/>
        ))
      ) : (
        <p>No hay productos disponibles</p>
      )}
    
    <h2 id="horario">Horarios</h2>
    <p><b>Domingos: </b>No laborable</p><br/>
    <p><b>Lunes - Jueves:  </b> 9:00AM-8:00PM</p><br/>
    <p><b>Viernes - Sábados </b>9:00AM-6:00PM</p>

  {/* Aqui va el footer */}
    <Formulario/>

  </>
  )
}
export default Home;