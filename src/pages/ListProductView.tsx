import { useEffect, useState } from "react";
// import { api } from "../config/axiosConnect";
import { getProductos } from "../services/productService";
import { Table, Button, Spinner } from "react-bootstrap";

interface Product {
  id?: number;
  nombre: string;
  descripcion: string;
  marca: string;
  precio: number;
  foto: string;
  color: string;
}

const ListProductView = () => {
  const [productos, setProductos] = useState<Product[]>([]);
  let isLoading = false;

  useEffect(() => {
    const obtenerProductos = async () => {
      const productos = await getProductos();
      setProductos(productos);
    };
    isLoading = true;
    obtenerProductos();
    isLoading = false;
  }, []);

  return (
    <div className="m-4">
      <h1>Lista de productos</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Marca</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {isLoading?(
          productos.map((producto)=>(
            <tr key={producto.id}>
              <td> {producto.nombre} </td>
              <td> {producto.descripcion} </td>
              <td> {producto.color} </td>
              <td> {producto.precio} </td>
              <td className="">
                <div className="d-flex gap-1">
                  <Button variant="primary">Editar</Button>
                  <Button variant="danger">Eliminar</Button>
                </div>
              </td>
            </tr>
          ))
        ):(
          <div className="d-flex justify-content-center align-items-center w-100">
            <Spinner animation="border" /> 
          </div>
        )
      }
      </tbody>
    </Table>
    </div>
  );
};

export default ListProductView;
