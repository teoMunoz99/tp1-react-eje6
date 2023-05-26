import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from './components/Formulario';
import {Container} from "react-bootstrap";

function App() {

  return (
    <>
      <Container className='pt-5'>
        <Formulario/>
      </Container>
    </>
  )
}

export default App
