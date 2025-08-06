import { useEffect, useState } from "react";
// import { api } from "../config/axiosConnect";
import { getProductos } from "../services/productService";

interface Productos {
  id: number;
  nombre: string;
  descripcion: string;
  marca: string;
  precio: number;
  foto: string;
  color: string;
}

const ListProductView = () => {
  const [productos, setProductos] = useState<Productos[]>([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      const productos = await getProductos();
      setProductos(productos);
    };
    obtenerProductos();
  }, []);

  return (
    <div>
      <h1>Lista de productos</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Marca</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {
						productos.map((producto)=>(
							<tr key={producto.id}>
								<td> {producto.nombre} </td>
								<td> {producto.descripcion} </td>
								<td> {producto.color} </td>
								<td> {producto.precio} </td>
							</tr>
						))
					}
        </tbody>
      </table>
    </div>
  );
};

export default ListProductView;
