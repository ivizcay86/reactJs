import './ItemListContainer.css';
import ItemList from  './ItemList';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


function ItemListContainer() {
  const [info, setInfo] = useState([])
  const params = useParams()

    useEffect(() => {
          setTimeout (() =>
            fetch('../date.json')
            .then((resp) => resp.json())
            .then((data) => {
              if (params.category) {
              return data.filter(products=> products.category === (params.category))
              } else {
              return data
              }
              }
              )
            .then((data) => setInfo(data)),
            2000
          );
     }, [])
    return (
      <div className='main-wrapper'>
        <div className='main-header'>
            <div className='page-width'>
              <div className='main-nav'>
                  <ItemList products = {info} />
              </div>
            </div>
        </div>
      </div>
  );
}

export default ItemListContainer;