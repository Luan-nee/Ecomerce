import { api } from "../config/axiosConnect";

interface Productos {
    id: number;
    nombre: string;
    descripcion: string;
    marca: string;
    precio: number;
    foto: string;
    color: string;
  }

export function getProductos(): Promise<Productos[]> {
  const obtenerProductos = async (): Promise<Productos[]> => {
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

export function createProduct(product: Productos): Promise<Productos> {
  const crearProducto = async (): Promise<Productos> => {
    try {
      await api.post("/productos", product);
      return product;
    } catch (error) {
      console.log('Ocurrió un error al crear el producto', error);
      throw error;
    }
  };

  return crearProducto();
}
