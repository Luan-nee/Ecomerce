import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { createProduct } from "../services/productService";
import type { Product } from "../interface/Product";
import swal from "sweetalert";

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
    console.log(values);
  }

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    
    try {
      await createProduct(values);
      
      // Mostrar alerta de éxito con SweetAlert
      swal({
        title: "¡Éxito!",
        text: "El producto se ha creado correctamente",
        icon: "success",
      });

      // Limpiar el formulario después de crear el producto
      setValues({
        nombre: '',
        descripcion: '',
        marca: '',
        precio: 0, 
        foto: "https://via.placeholder.com/150",
        color: ''
      });
      
    } catch (error) {
      // Mostrar alerta de error
      swal({
        title: "Error",
        text: "Ocurrió un error al crear el producto. Por favor, intenta nuevamente.",
        icon: "error",
      });
      console.error('Error al crear producto:', error);
    }
  }

  return (
    <Container className="my-5">
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control 
          type="text" 
          name="nombre" 
          value={values.nombre} 
          onChange={handleValues} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescripcion">
        <Form.Label>Descripción</Form.Label>
        <Form.Control 
          as="textarea" 
          name="descripcion"
          value={values.descripcion}
          onChange={handleValues}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMarca">
        <Form.Label>Marca</Form.Label>
        <Form.Control 
          type="text" 
          name="marca"
          value={values.marca}
          onChange={handleValues} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPrecio">
        <Form.Label>Precio</Form.Label>
        <Form.Control 
          type="number" 
          name="precio"
          value={values.precio}
          onChange={handleValues}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formColor">
        <Form.Label>Color</Form.Label>
        <Form.Control 
          type="text" 
          name="color"
          value={values.color}
          onChange={handleValues}
        />
      </Form.Group>

      <Button variant="primary" type="submit" >
        Crear Producto
      </Button>
    </Form>
    </Container>

  // <form action="">
  //   <div>
  //     <label 
  //       htmlFor="nombre"
  //       className="form-label"
  //     >Nombre</label>
  //     <input 
  //       type="text" 
  //       id="nombre"
  //       className="form-input"
  //       value={values.nombre}
  //       onChange={handleValues}
  //     />
  //   </div>
  //   <div>
  //     <label 
  //       htmlFor="descripcion"
  //       className="form-label"
  //     >Descripción</label>
  //     <textarea
  //       id="descripcion"
  //       className="form-input"
  //       value={values.descripcion}
  //       onChange={handleValues}
  //     /> 
  //   </div>
  //   <div>
  //     <label 
  //       htmlFor="marca"
  //       className="form-label"
  //     >Marca</label>
  //     <input 
  //       type="text" 
  //       id="marca"
  //       className="form-input"
  //       value={values.marca}
  //       onChange={handleValues}
  //     />
  //   </div>
  //   <div>
  //     <label 
  //       htmlFor="precio"
  //       className="form-label"
  //     >Precio</label>
  //     <input 
  //       type="number" 
  //       id="precio"
  //       className="form-input"
  //       value={values.precio}
  //       onChange={handleValues}
  //     />
  //   </div>
  //   <div>
  //     <label 
  //       htmlFor="color"
  //       className="form-label"
  //     >Color</label>
  //     <input 
  //       type="text" 
  //       id="color"
  //       className="form-input"
  //       value={values.color}
  //       onChange={handleValues}
  //     />
  //   </div>
  //   <button type="submit">Crear Producto</button>
  // </form>
  );
}

export default CreateProduct;