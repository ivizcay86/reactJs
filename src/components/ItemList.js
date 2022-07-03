import Item from './Item';
import {Container, Row, Col} from 'react-bootstrap';
import './ItemList.css';


function ItemList({info}) {
  return (
    <Container>
        <Row>
            {info && info.map (i => <Col lg="4"> <Item key={i.id} name={i.name} price={i.price} stock={i.stock} /> </Col>)}
        </Row>
    </Container>
  );
}

export default ItemList;