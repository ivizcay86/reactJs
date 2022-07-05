import Item from './Item';
import {Container, Row, Col} from 'react-bootstrap';
import './ItemList.css';


function ItemList(props) {
  return (
    <Container>
        <Row>
            {props.products && props.products.map (i => <Col lg="4">  <Item id={i.id} name={i.name} price={i.price} stock={i.stock} /> </Col>)}
        </Row>
    </Container>
  );
}

export default ItemList;