import './ItemCount.css';
import { useState } from "react";


function ItemCount({stock, onAdd}) {
    const [num, setNum] = useState(0);

    const plus = () => {
        if (num < stock) {
            setNum(num + 1)
        }
        else {
            alert ("No hay stock mas disponible de este producto")
        }
    }

    const minus = () => {
        if (num > 0) {
            setNum(num - 1)
        }
    }
  return (
    <div className='itemCount-wrapper'>
        <div className='itemCount-header'>
            <div className='itemCount-width'>
                <div className='main-general-button'>
                    <button className='main-button' onClick={minus}>-</button>
                    <div>{num}</div>
                    <button className='main-button' onClick={plus}>+</button>
                </div>
                <div className=''>
                    <button className='' onClick={() => onAdd(num)}>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ItemCount;