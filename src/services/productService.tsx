import { api } from "../config/axiosConnect";
import type { Product } from "../interface/Product";

export function getProductos(): Promise<Product[]> {
  const obtenerProductos = async (): Promise<Product[]> => {
    try {
      const datos = await api.get("/productos");
      return datos.data;
    } catch (error) {
      console.log('Ocurrió un error al obtener los productos', error);
      return [];
    }
  };

  return obtenerProductos();
}

export function createProduct(product: Product): Promise<Product> {
  const crearProducto = async (): Promise<Product> => {
    try {
      await api.post("/productos", product);
      console.log('Producto creado exitosamente');
      return product;
    } catch (error) {
      console.log('Ocurrió un error al crear el producto', error);
      throw error;
    }
  };

  return crearProducto();
}

export function deleteProduct(product: Product): Promise<void> {
  const eliminarProducto = async (): Promise<void> => {
    try {
      await api.delete(`/productos/${product.id}`);
      console.log('Producto eliminado exitosamente');
    } catch (error) {
      console.log('Ocurrió un error al eliminar el producto', error);
      throw error;
    }
  };

  return eliminarProducto();
}