import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Destaques() {
    return (
        <Row className='mt-2'>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="src/img/roma.jfif" width={300} height={300} />
                    <Card.Body>
                        <Card.Title>Conheça nossos destinos!</Card.Title>
                        <Card.Text>
                           bla bla bla texto sobre viagem bla bla bla 
                        </Card.Text>
                        <LinkContainer to="/Login">
                            <Button variant="warning">Login</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="src/img/espanha.jpg" width={300} height={300} />
                    <Card.Body>
                        <Card.Title>  To sem ideia </Card.Title>
                        <Card.Text>
                           ???????????????????????????????
                        </Card.Text>
                        <LinkContainer to="/funcionalidades">
                            <Button variant="warning">Conheça mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="src/img/londres.jpg" width={300} height={300} />
                    <Card.Body>
                        <Card.Title>Contato</Card.Title>
                        <Card.Text>
                            Deixe sua dúvida ou sugestão, entraremos em contato assim que possível!
                        </Card.Text>
                        <LinkContainer to="/contato">
                        <Button variant="warning">Entre em contato</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>                        
        </Row>
    );
}

export default Destaques;