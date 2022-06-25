import './ItemList.css';
import { useEffect, useState } from "react";
import Item from './Item';


function ItemList() {
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch('date.json')
        .then((resp) => resp.json())
        .then((data) => setInfo(data))
    }, [])
  return (
    <div>
        {info && info.map (i => <Item name={i.name} price={i.price} stock={i.stock} />)}
    </div>
  );
}

export default ItemList;