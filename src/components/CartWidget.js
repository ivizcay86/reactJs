import './CartWidget.css';
import handbag from './../assets/icons/handbag.svg'

function CartWidget() {
    return (
<a className='site-nav-icons-link' href="#">
        <img src={handbag} className="site-nav-icons-img"></img>
</a>
  );
}

export default CartWidget;