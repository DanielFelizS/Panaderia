import "../App.css";
import Formulario from "../components/Formulario";
import Container from "../components/Container";
import Routers from "./Routers";
import Banner from "../components/Banner";
import useProductos from "../CustomHooks/UseProductos";

export const Home = () => {
  const { productos, loading, error } = useProductos();
  
  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <Banner />
      <Routers />

      <h2>Noticias</h2>
      <p>¡Oferta Especial!</p>
      <p>Presentamos nuestros nuevos productos a buen precio</p>

      {/* Aquí van los productos */}
      {productos.length > 0 ? (
        productos.map((item, id) => (
          <Container key={id} imgUrl={item.imagen} name={item.nombre} precio={item.precio} />
        ))
      ) : (
        <p>No hay productos disponibles</p>
      )}

      <h2 id="horario">Horarios</h2>
      <p>
        <b>Domingos: </b>No laborable
      </p>
      <br />
      <p>
        <b>Lunes - Jueves: </b> 9:00AM-8:00PM
      </p>
      <br />
      <p>
        <b>Viernes - Sábados </b>9:00AM-6:00PM
      </p>

      {/* Aquí va el footer */}
      <Formulario />
    </>
  );
};

export default Home;
