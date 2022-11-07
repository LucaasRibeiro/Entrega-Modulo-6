import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contato() {
  return (
    <Container>
        <h1>Contato</h1>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            Nós não compartilhamos o seu e-mail com ninguém.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>Mensagem</Form.Label>
            <Form.Control type="form" placeholder="Deixe a sua mensagem aqui." />
        </Form.Group>
        
        <div id="emailHelp" class="form-text">Com respeito as normas da LGPD, todos seus dados serão devidamente
        guardados com segurança.</div>
       <Button variant="dark" type="submit">
            Enviar
        </Button>
        </Form>
    </Container>   
  );
}

export default Contato;