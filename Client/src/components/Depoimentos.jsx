import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Depoimentos() {
    return (
        <>
        <h2 className='mt-3'>Depoimentos</h2>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src="src/img/img1.jpg" alt="Foto do depoimento" className='rounded' width={150} height={150} />
            </Col>
            <Col sm="12" md="10">
                <strong>Depoimento 1</strong>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repellendus at voluptate voluptatibus illo ad vel ut numquam, quas sunt hic esse, dolore recusandae est vero quod minima eius repellat."
                </p>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                    <img src="src/img/img2.jpg" alt="Foto do depoimento2" className='rounded' width={150} height={150} />
            </Col>
            <Col sm="12" md="10">
                <strong>Depoimento 2</strong>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repellendus at voluptate voluptatibus illo ad vel ut numquam, quas sunt hic esse, dolore recusandae est vero quod minima eius repellat."
                </p>
            </Col>
        </Row>        
        </>
    )
}

export default Depoimentos