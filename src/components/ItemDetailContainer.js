import './ItemDetailContainer.css';
import ItemDetail from  './ItemDetail';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'


function ItemDetailContainer() {
  const params = useParams ()
  const [detailInfo, setDetail] = useState()

  useEffect(() => {

    setTimeout (() =>

      fetch('date.json')
      .then(resp => {console.log(resp.json())
        return resp.json()})

      .then((data) => setDetail(data.find(i=>i.id === params.id ))
      ),
      2000

    );

}, [])
    return (
      <div className='main-wrapper'>
        <div className='main-header'>
            <div className='page-width'>
              <div className='main-content-detail'>
                  {detailInfo ? <ItemDetail {...detailInfo}/>: <h1>Loading</h1>}
              </div>
            </div>
        </div>
      </div>
  );
}

export default ItemDetailContainer;