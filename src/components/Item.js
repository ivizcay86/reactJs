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
                </div>
            </a>
        <p>{price}</p>
        <p>{stock}</p>
        <ItemCount stock={stock} />
        </div>
    </div>
  );
}

export default Item;