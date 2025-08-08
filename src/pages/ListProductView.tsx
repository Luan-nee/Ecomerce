import { useEffect, useState } from "react";
import { getProductos, deleteProduct } from "../services/productService";
import { Table, Button, Spinner } from "react-bootstrap";
import type { Product } from "../interface/Product";

const ListProductView = () => {
  const [productos, setProductos] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const obtenerProductos = async () => {
    setIsLoading(true);
    try {
      const productos = await getProductos();
      setProductos(productos);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteProduct = async (producto: Product) => {
    try {
      await deleteProduct(producto);
      await obtenerProductos(); // Recargar la lista después de eliminar
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    }
  };

  useEffect(() => {
    obtenerProductos();
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
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <tr>
            <td colSpan={5} className="text-center">
              <div className="d-flex justify-content-center align-items-center py-3">
                <Spinner animation="border" /> 
                <span className="ms-2">Cargando productos...</span>
              </div>
            </td>
          </tr>
        ) : (
          productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.color}</td>
              <td>${producto.precio}</td>
              <td>
                <div className="d-flex gap-1">
                  <Button variant="primary" size="sm">Editar</Button>
                  <Button 
                    onClick={() => handleDeleteProduct(producto)} 
                    variant="danger" 
                    size="sm"
                  >
                    Eliminar
                  </Button>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
    </div>
  );
};

export default ListProductView;
