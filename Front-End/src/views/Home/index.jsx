import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import "../Home/style.css";
import Imagem1 from "../../assets/Imagens_Final/Mundo.jpg";

function Home() {
  return (
    <Container>
        <nav className="Home">
            <h2>✈︎ Faça um orçamento conosco</h2>
            <div id="orcamento" class="form-text">Seguindo as normas da LGPD, todos seus dados serão devidamente guardados com a devida segurança!</div>
        </nav>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Digite o seu e-mail" />
            <Form.Text className="text-muted">
            Nós não compartilhamos o seu e-mail com ninguém.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Digite a sua senha" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Lembrar-me" />
        </Form.Group>
        <Button variant="dark" type="submit">
            Enviar
        </Button>
        </Form>

        <section className="row">
        <h3>Viagens LR</h3>
            <div className="col">
                <p> Viagens L.R é uma agencia destinada para você e a sua familia realizarem seus sonhos</p>
                <p>Sabe aquela VIAGEM BARATA que você está procurando para as suas férias? Ela está aqui na Viagens LR.
                    Encontre promoções de voo por preços imperdíveis! Essa é uma ótima oportunidade para você
                    conhecer destinos do Brasil e do mundo fazendo quantas viagens baratas desejar. Com essas OFERTAS, você terá acesso aos preços mais baixos para as próximas semanas, tanto de voos quanto de
                    hotéis. Faça agora um orgamento com a gente (acima desse texto) com mesmo os pacotes em oferta com a Viagens e comece a
                    tornar realidade a viagem que você sempre sonhou!
                </p>
            </div>
            <div className="col">
                <img src={Imagem1} alt="Mundo" width="500px"/>
            </div>
        </section>
        <hr/>
    </Container>    

    
  );
}

export default Home;