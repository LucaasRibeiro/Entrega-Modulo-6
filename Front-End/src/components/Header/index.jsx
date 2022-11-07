import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from "../../views/Home";
import Destinos from "../../views/Destinos";
import Promocoes from "../../views/Promocoes";
import Contato from "../../views/Contato";


function Header() {
  return (
    <BrowserRouter>
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#">VIAGENS LR</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
                        <Nav.Link as={Link} to="/Home">HOME</Nav.Link>
                        <Nav.Link as={Link} to="/Destinos">DESTINOS</Nav.Link>
                        <Nav.Link as={Link} to="/Promocoes">PROMOÇÕES</Nav.Link>
                        <Nav.Link as={Link} to="/Contato">CONTATO</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Estou procurando por..."
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-light">BUSCAR</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div>
            <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Destinos" element={<Destinos/>}/>
                <Route path="/Promocoes" element={<Promocoes/>}/>
                <Route path="/Contato" element={<Contato/>}/>
            </Routes>
        </div>
    </BrowserRouter>    
  );
}

export default Header;