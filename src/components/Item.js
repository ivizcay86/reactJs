import './Item.css';
import ItemCount from './ItemCount';

function Item({name, price, stock}) {
  return (
    <div className='grid-item'>
        <div className='grid-product-content'>
            <a href="" className='grid-product-link'>  
                <div className='grid-product-image'>
                    <div className='image-wrap'>
                    
                    </div>  
                </div>
                <div className='grid-product-meta'>
                    <div className='grid-product-title'>
                        {name}
                    </div>
                    <div className='grid-product-price'>
                        <spam>${price}</spam>
                    </div>
                </div>
            </a>
            <div className='grid-product-content'>    
                <div className='grid-product-cart'>
                    <div>
                        <ItemCount stock={stock} />
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