import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import GridCards from "./GridCards";
import { useState, useEffect } from "react";


const Formulario = () => {
    const [color, setColor] = useState('');
    let coloresCargados = JSON.parse(localStorage.getItem('listaColores')) || [];
    const [listaColores, setListaColores] = useState(coloresCargados);

    useEffect(()=>{
        localStorage.setItem('listaColores', JSON.stringify(listaColores))
    }, [listaColores])

    const handleSubmit = (e)=>{
        e.preventDefault();
        setListaColores([...listaColores, color]);
        setColor('');
    }

    const borrarColor = (nombreColor)=>{
        let colorFiltrado = listaColores.filter((itemColor)=> itemColor !== nombreColor);
        setListaColores(colorFiltrado);
    }
  return (
    <section>
      <Form className="border p-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formColores">
          <Form.Label>Administrar colores</Form.Label>
          <Form.Control type="text" placeholder="Ej: Blue" 
          onChange={(e)=> setColor(e.target.value)} value={color}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button> 
      </Form>
      <GridCards ListaColores={listaColores} borrarColor={borrarColor}/>
    </section>
  );
};

export default Formulario;
