import { useContext, useEffect, useState } from 'react';
import './Cart.css';
import { CartContext } from './store/CartContext';
import {Link} from 'react-router-dom'
import Order from "./Order";


function Cart() {
    const { cart, removeItem, getTotal } = useContext (CartContext);

    const [empty, setEmpty] = useState(true);
    const [showOrder, setShowOrder] = useState(true);
    window.scrollTo(0,0)

    useEffect(() => {
        if (cart.length === 0) {
            setEmpty(true);
        } else {
            setEmpty(false);
        }
    }, [cart.length]);

    if (!empty) {
        return (
            <div className='cartview-container'>
                {showOrder ? (
                    <div className='view-container'>
                        {cart.map((e) => (
                            <div className='cart-item-container' key={e.id}>
                                <img src={e.img} />
                                <span> {e.name} </span>
                                <span> {e.price} </span>
                                <span> {e.quantity} </span>
                                <button onClick={() => removeItem(e.id)}>
                                {" "}
                                Delete {" "}
                                </button>
                            </div>
                        ))}
                        <div className='total-price-container'>
                            <h4> TOTAL: ${getTotal()} </h4>
                            <button
                                onClick={() => setShowOrder(false)}
                                className='total-button'
                            >
                                {" "}
                                Confirm Order{" "}
                            </button>
                        </div>
                    </div>
                ) : (
                    <Order order={cart} getTotal={getTotal} />
                )}
            </div>
        );
    } else {
        return (
            <div className='cart-container'>
                <h1>No items in cart</h1>
                <Link to="/home">
                    {" "}
                    <button className='return-button'> Return </button>{" "}
                </Link>
            </div>
        );
    }
};

export default Cart;