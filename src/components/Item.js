import './Item.css';
import ItemCount from './ItemCount';

function Item({name, price, stock}) {
  return (
    <div>
        <h4>{name}</h4>
        <p>{price}</p>
        <p>{stock}</p>
        <ItemCount stock={stock} />
    </div>
  );
}

export default Item;