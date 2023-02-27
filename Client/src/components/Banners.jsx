import Carousel from 'react-bootstrap/Carousel'

function Banners() {
    return (
        <Carousel variant="dark" className='conteudo-margin'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="src/img/turquia.jpg"
                    width={1500}
                    height={300}
                    alt="Imagem1"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="src/img/paraty.jpg"
                    width={600}
                    height={600}
                    alt="imagem2"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/1500x300/ffd000"
                    alt="imagem3"
                />
                <Carousel.Caption>
                    <h5>Contato para parcerias?</h5>
                    <p>
                        Entre em contato com a nossa equipe para conversar sobre oportunidades de parceria
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Banners