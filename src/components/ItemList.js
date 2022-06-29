import './ItemList.css';
import { useEffect, useState } from "react";
import Item from './Item';


function ItemList() {
    const [info, setInfo] = useState([])

    useEffect(() => {
          setTimeout (() =>
            fetch('date.json')
            .then((resp) => resp.json())
            .then((data) => setInfo(data)),
            2000
          );
     }, [])
  return (
    <div className='main-list'>
        {info && info.map (i => <Item key={i.id} name={i.name} price={i.price} stock={i.stock} />)}
    </div>
  );
}

export default ItemList;