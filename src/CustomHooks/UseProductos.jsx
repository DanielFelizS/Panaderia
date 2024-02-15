import { useState, useEffect } from "react";

const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../productos.json");
        if (!response.ok) {
          throw new Error("No se pudieron cargar los datos");
        }
        const data = await response.json();
        if (data && data.ofertas && Array.isArray(data.ofertas)) {
          setProductos(data.ofertas);
        } else {
          throw new Error("La categoría 'ofertas' no existe en el archivo productos.json.");
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { productos, loading, error };
};

export default useProductos;
