import './ItemListContainer.css';
import ItemList from  './ItemList';


function ItemListContainer() {
    return (
      <div className='main-wrapper'>
        <div className='main-header'>
            <div className='page-width'>
              <div className='main-nav'>
                  <ItemList />
              </div>
            </div>
        </div>
      </div>
  );
}

export default ItemListContainer;