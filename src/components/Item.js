import './Item.css';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

function Item(props) {
  return (
    <div className='grid-item'>
        <div className='grid-product-content'>
            <Link to={`/details/${props.id}`} className='grid-product-link'>  
                <div className='grid-product-image'>
                    <div className='image-wrap'>
                    
                    </div>  
                </div>
                <div className='grid-product-meta'>
                    <div className='grid-product-title'>
                        {props.name}
                    </div>
                    <div className='grid-product-price'>
                        <span>${props.price}</span>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  );
}

export default Item;