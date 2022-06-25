import './ItemCount.css';
import { useState } from "react";


function ItemCount({stock}) {
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
                    <p>{num}</p>
                    <button className='main-button' onClick={plus}>+</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ItemCount;