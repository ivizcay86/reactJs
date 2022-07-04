import './ItemDetailContainer.css';
import ItemDetail from  './ItemDetail';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'


function ItemDetailContainer() {
  const params = useParams ([])
  const [detailInfo, setDetail] = useState([])

  const getitem = () => {
      fetch("https://api.npoint.io/41227e0e63d9dde10bd4/{params.id}")
      .then((resp) => resp.json())
      .then((data) => {setDetail(data) 
      })
    }
    useEffect(() => {
    getitem()
  }, []
  )
    return (
      <div className='main-wrapper'>
        <div className='main-header'>
            <div className='page-width'>
              <div className='main-content-detail'>
                  {detailInfo.length !==0> <h1>Nombre: {detailInfo[0].name}</h1>}
              </div>
            </div>
        </div>
      </div>
  );
}

export default ItemDetailContainer;