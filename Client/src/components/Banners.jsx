import Carousel from 'react-bootstrap/Carousel'

function Banners() {
    return (
        <Carousel variant="dark" className='conteudo-margin'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src=".\src\img\cascata.jpg"
                    width={1500}
                    height={400}
                    alt="Imagem1"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src=".\src\img\cataratas.jpg"
                    width={1500}
                    height={400}
                    alt="imagem2"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src=".\src\img\lenco.jpg"
                    width={1500}
                    height={400}
                    alt="imagem3"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Banners