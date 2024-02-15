import Formulario from "../components/Formulario"
import Container from "../components/Container";
import Routers from "./Routers";
import Banner from "../components/Banner";
import { useState, useEffect } from "react";

export const Servicios = () => {
    const [desayuno, setDesayuno] = useState([]);
    const [picaderas, setPicaderas] = useState([]);
    const [birthdays, setBirthdays] = useState([]);

    useEffect(() => {
        fetch("productos.json")
          .then((response) => response.json())
          .then((data) => {
            if (data && data.desayunos && Array.isArray(data.desayunos) || data && data.picaderas && Array.isArray(data.picaderas) || data && data.birthdays && Array.isArray(data.birthdays)) {
                setDesayuno(data.desayunos);
                setPicaderas(data.picaderas);
                setBirthdays(data.birthdays);
            } else {
              console.error("La categoría no existe en el archivo productos.json.");
            }
          })
          .catch((error) => {
            console.error("Error al obtener los productos:", error);
          });
      }, []);
    return(
        <>
            {/* Banner */}
            <Banner />

            {/* Header */}
            <Routers />

            <h2>Servicios</h2>
            <p>Ofrecemos los mejores servicios para todo tipo de ocasión</p><br/>

            <h2>Desayunos</h2>
            <p>Con nuestros productos su día va a comenzar con energía</p>

            {Array.isArray(desayuno) ? (
                desayuno.map((item, id) => (
                    <Container key={id} imgUrl={item.imagen} name={item.nombre} precio={item.precio}/>
                ))
            ) : (
                <p>No hay desayunos disponibles</p>
            )}

            <h2>Picaderas</h2>
            <p>Ofrecemos todo tipo de picaderas</p>

            {Array.isArray(picaderas) ? (
                picaderas.map((item, id) => (
                    <Container key={id} imgUrl={item.imagen} name={item.nombre} precio={item.precio}/>
                ))
            ) : (
                <p>No hay picaderas disponibles</p>
            )}

            <h2>Cumpleaños</h2>
            <p>Ofrecemos servicios para cumpleaños</p>

            {Array.isArray(birthdays) ? (
                birthdays.map((item, id) => (
                    <Container key={id} imgUrl={item.imagen} name={item.nombre} precio={item.precio}/>
                ))
            ) : (
                <p>No hay birthdays disponibles</p>
            )}

            <h2>Empresas</h2>
            <p>Diferentes tipos de servicios para empresas</p>
            <p>Para más información <b>Contáctenos</b></p>

            <Formulario />
        </>
    )
}

export default Servicios