import './Item.css';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

function Item({props}) {
  return (
    <div className='grid-item'>
        <div className='grid-product-content'>
            <Link to={'details/${props.id'} className='grid-product-link'>  
                <div className='grid-product-image'>
                    <div className='image-wrap'>
                    
                    </div>  
                </div>
                <div className='grid-product-meta'>
                    <div className='grid-product-title'>
                        {props.name}
                    </div>
                    <div className='grid-product-price'>
                        <spam>${props.price}</spam>
                    </div>
                </div>
            </Link>
            <div className='grid-product-content'>    
                <div className='grid-product-cart'>
                    <div>
                        <ItemCount stock={props.stock} />
                    </div>
                    <div>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Item;