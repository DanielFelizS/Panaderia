/* eslint-disable react/prop-types */

export const Container = ( {imgUrl, name, precio} ) => {
  return (
    <>
    <div className="contenedor">
      <figure>
          <img src={`./src/img/${imgUrl}`} alt={name}/>
          <div className="cap">
              <h3>{name}</h3>
              <p>Precio: RD${precio}</p>
          </div>
      </figure>
  </div>
    </>
  )
}

export default Container