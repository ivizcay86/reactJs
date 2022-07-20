import './ItemListContainer.css';
import ItemList from  './ItemList';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {getFirestore, doc, getDoc, collection, getDocs, query, where} from 'firebase/firestore'


function ItemListContainer() {
  const [info, setInfo] = useState([])
  const params = useParams()

    /*useEffect(() => {
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
     }, [params.category])*/

    useEffect(() => {
      const db = getFirestore();
      let productsRef

      if (params.category) {
        productsRef = query(collection(db, "products"), where("category", "==", params.category))
      } else {
        productsRef = collection(db, "products")
      }

      getDocs(productsRef).then((snapshot) => {
            setInfo(snapshot.docs.map((doc) => doc.data()))
      })
    }, [params.category])


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