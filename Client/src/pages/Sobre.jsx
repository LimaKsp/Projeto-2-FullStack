import Container from 'react-bootstrap/Container'
import { useEffect, useState } from 'react'
import CmsApi from '../api/CmsApi'
import Menu from '../components/Menu'

function Sobre() {
    const [sobre, setSobre] = useState([])

    useEffect (() => {
        async function getSobre() {
            const response = await CmsApi().getSobre()
            const sobre = await response.json()
            setSobre(sobre.data)
        }

        getSobre()
    }, [])

    return (
        <>
         <Menu />
        <Container className='conteudo-margin'> 
                <h1>A TourTrip é uma empresa de viagens que oferece experiências únicas para seus clientes, com destinos exóticos e emocionantes ao redor do mundo.<br/>
                Com um time de especialistas em turismo, a TourTrip se dedica a planejar cada detalhe da viagem para garantir a satisfação dos seus clientes, desde a escolha do destino até a acomodação e atividades durante a viagem.<br/>
                Além disso, a empresa preza pela segurança e conforto dos seus clientes, proporcionando uma experiência inesquecível e sem preocupações.<br/>
                Venha conhecer o mundo com a TourTrip!</h1>

            </Container>
    </>
    );
}

export default Sobre