import ItemCount from './ItemCount';
import './ItemDetail.css';

function ItemDetail() {
  return (
    <div className='grid'>
        <div className='grid__item'>
            <div className='image-wrap'></div>
        
        </div>
        <div className='grid__item'>
            <div className='product-single-meta'>{name}</div>
            <span className='product-price'>{price}</span>
            <hr className='hr-medium'></hr>
            <form className='product-single-form'>
                <div className='product-quantity'>
                    <label>Quantity</label>
                    <ItemCount stock={stock}/>
                </div>
                <button>Add to Cart</button>
            </form>
        </div>
    </div>
  );
}

export default ItemDetail;