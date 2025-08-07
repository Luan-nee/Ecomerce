import { api } from "../config/axiosConnect";

interface Product {
    id?: number;
    nombre: string;
    descripcion: string;
    marca: string;
    precio: number;
    foto: string;
    color: string;
  }

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