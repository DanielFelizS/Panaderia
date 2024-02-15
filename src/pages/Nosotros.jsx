import Formulario from "../components/Formulario";
// import Container from "../components/Container";
import Routers from "./Routers";
import Banner from "../components/Banner";

export const Nosotros = () => {
  return (
    <>
      <Banner />
      <Routers />

      <h2> Sobre Nosotros</h2>
      <h3 className="h3">Visión</h3>
      <img id="vision-valores-mision" src="public/img/Vision.jfif" alt="" />
      <p>Ofrecer el mejor servicio de Panadería y Repostería a los clientes</p>
      <h3 className="h3">Misión</h3>
      <img id="vision-valores-mision" src="public/img/mision.jpg" alt="mision" />
      <p>Brindamos los mejores precios de Panadería y Repostería</p>
      <h3 className="h3">Valores</h3>
      <img id="vision-valores-mision" src="public/img/Valores.jfif" alt="" />
      <ol>
      <li>Responsabilidad</li>
      <li>Honestidad</li>
      <li>Empatía</li>
      </ol>
      <h3 className="h3">Nuestros mejores empleados</h3>
      <div>
      <div className="contenedor" style={{marginLeft: '260px'}}>
        <figure>
          <img id="Eli" src="public/img/Eli.jpg" alt="Gerente" title="Gerente"/>
          <div className="cap">
            <h3>Eli R. Muñoz</h3>
            <p>Gerente</p>
          </div>
        </figure>
      </div>
      <div className="contenedor">
        <figure>
          <img src="public/img/Keily.jpeg" alt="Empleado del mes" title="Empleado del mes" />
          <div className="cap">
            <h3>Keily Alcantara Herasme</h3>
            <p>Empleado del mes</p>
          </div>
        </figure>
      </div>
      </div>
      <h3 id="historia" className="h3">Historia</h3>
      <div className="fundador">
        <figure>
          <img src="./public/img/yo.jpeg" alt="Daniel Feliz" />
          <div className="cap">
            <h3>Daniel Feliz</h3>
            <p>fundador</p>
          </div>
        </figure>
      </div>
      <p id="parrafo"><b>Daniel Féliz</b> fundador de la empresa.
        <p>Fundó la empresa el 8 de junio de 2024.</p>
        <p>Terminó sus estudios de Informática en el Instituto Politécnico el Ave María.</p>
        <p>Luego pensó poner un negocio junto con sus padres, y así surgió la Panadería Féliz.</p>
      </p>

      <Formulario />
    </>
    )
}
export default Nosotros;