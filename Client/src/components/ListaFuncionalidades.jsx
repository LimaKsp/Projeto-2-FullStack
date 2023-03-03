import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AdminFuncionalidades from '../pages/Admin/AdminFuncionalidades';

function ItemFuncionalidade(props) {
const { id, title, description, onEdit, onDelete } = props;
return (
<Col sm="12" md="4" key={id}>
<Card className='m-3'>
<Card.Body>
<Card.Title>
<strong>{title}</strong>
</Card.Title>
<Card.Text>
{description}
</Card.Text>
<Card.Text>
<Button variant="primary" onClick={() => onEdit(props,id)}>Editar</Button>
<Button variant="danger" onClick={() => onDelete(id)}>Excluir</Button>
</Card.Text>
</Card.Body>
</Card>
</Col>
);
}

function ListaFuncionalidades(props) {
    
return (
    
<Row>
    
{props.funcionalidades.map(item => (
<ItemFuncionalidade 
                 key={item.id} 
                 id={item.id} 
                 title={item.title} 
                 description={item.description} 
                 onEdit={props.onEdit} 
                 onDelete={props.onDelete} 
             />
))}
</Row>
);
}

export default ListaFuncionalidades;