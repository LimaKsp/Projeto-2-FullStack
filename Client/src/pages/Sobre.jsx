import Container from 'react-bootstrap/Container'
import Depoimentos from '../components/Depoimentos'
import { useEffect, useState } from 'react'
import CmsApi from '../api/CmsApi'
import Banners from '../components/Banners'

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
        <Banners />
        <Container className='conteudo-margin'>
            <p>{sobre.text}</p>
            <Depoimentos />
            </Container>
    </>
    );
}

export default Sobre