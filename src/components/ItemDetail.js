import ItemCount from './ItemCount';
import './ItemDetail.css';
import {CartContext} from './store/CartContext';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import { useState, useContext} from 'react';

function ItemDetail(props) {
    const { addItemToCart } = useContext(CartContext)

    const [purchasedComplete, setPurchaseComplete] = useState(false)

    const onAddHandler = (quantityToAdd)=>{
        setPurchaseComplete(true)
        addItemToCart (props, quantityToAdd)
    }

  return (
    <div className='grid'>
        <div className='grid__item'>
            <div className='image-wrap'></div>
        
        </div>
        <div className='grid__item'>
            <div className='product-single-meta'>{props.name}</div>
            <span className='product-price'>{props.price}</span>
            <hr className='hr-medium'></hr>
            <div className='product-single-form'>
                <div className='product-quantity'>
                    <label>Quantity</label>
                    { !purchasedComplete ? (
                    <ItemCount stock={props.stock} onAdd={onAddHandler}/> ):(
                    <Link to={`/cart`}> <button onClick={()=><Cart/>}>To Cart</button> </Link>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
}

export default ItemDetail;