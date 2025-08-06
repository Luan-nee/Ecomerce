import { useState } from "react";
interface Product {
  nombre: string;
  descripcion: string;
  marca: string;
  precio: number;
  foto: string;
  color: string;
}


function CreateProduct(){
  const [values, setValues] = useState<Product>({
    nombre: '',
    descripcion: '',
    marca: '',
    precio: 0, 
    foto: "https://via.placeholder.com/150",
    color: ''
  });

  const handleValues = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const nombrePropiedad = ev.target.name;
    const valorPropiedad = ev.target.value;

    const productoNuevo = {
      ...values,
      [nombrePropiedad]: valorPropiedad
    };

    setValues(productoNuevo);
  }

  return (
  <form action="">
    <div>
      <label 
        htmlFor="nombre"
        className="form-label"
      >Nombre</label>
      <input 
        type="text" 
        id="nombre"
        className="form-input"
        value={values.nombre}
        onChange={handleValues}
      />
    </div>
    <div>
      <label 
        htmlFor="descripcion"
        className="form-label"
      >Descripción</label>
      <textarea
        id="descripcion"
        className="form-input"
        value={values.descripcion}
        onChange={handleValues}
      /> 
    </div>
    <div>
      <label 
        htmlFor="marca"
        className="form-label"
      >Marca</label>
      <input 
        type="text" 
        id="marca"
        className="form-input"
        value={values.marca}
        onChange={handleValues}
      />
    </div>
    <div>
      <label 
        htmlFor="precio"
        className="form-label"
      >Precio</label>
      <input 
        type="number" 
        id="precio"
        className="form-input"
        value={values.precio}
        onChange={handleValues}
      />
    </div>
    <div>
      <label 
        htmlFor="color"
        className="form-label"
      >Color</label>
      <input 
        type="text" 
        id="color"
        className="form-input"
        value={values.color}
        onChange={handleValues}
      />
    </div>
    <button type="submit">Crear Producto</button>
  </form>
  );
}

export default CreateProduct;