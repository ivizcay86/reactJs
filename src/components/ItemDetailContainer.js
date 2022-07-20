import './ItemDetailContainer.css';
import ItemDetail from  './ItemDetail';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import {getFirestore, doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore'


function ItemDetailContainer() {
  const params = useParams ()
  const [detailInfo, setDetail] = useState()

  /*useEffect(() => {

    setTimeout (() =>

      fetch('../date.json')
      .then(resp => resp.json())
      .then((data) => setDetail(data.find(i=>i.id ===parseInt(params.id )))
      ),
      2000

    );

}, [])*/

    useEffect(() => {
      const db = getFirestore();

      const productsRef = query(collection(db, "products"), where("id", "==", parseInt(params.id)))

      getDocs(productsRef).then((snapshot) => {
            setDetail(snapshot.docs[0].data())
      })
    }, [])


    return (
      <div className='main-wrapper'>
        <div className='main-header'>
            <div className='page-width'>
              <div className='main-content-detail'>
                  {detailInfo ? <ItemDetail {...detailInfo}/>: <h3>Loading</h3>}
              </div>
            </div>
        </div>
      </div>
  );
}

export default ItemDetailContainer;