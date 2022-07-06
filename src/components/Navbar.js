import './Navbar.css';
import person from './../assets/icons/person.svg'
import search from './../assets/icons/search.svg'
import handbag from './../assets/icons/handbag.svg'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='header-wrapper'>
        <div className='site-header'>
            <div className='page-width'>
                <div className='header-layout'>
                    <div className='header-item-left'></div>
                    <div className='header-item-logo'>
                        <h1 className='site-logo'>MALAIKA</h1>
                    </div>
                    <div className='header-item-icons'>
                        <div className='site-nav'>
                            <div className='site-nav-icons'>
                                <a className='site-nav-icons-link' href="#">
                                    <img src={person} className="site-nav-icons-img" />
                                </a>
                                <a className='site-nav-icons-link' href="#">
                                    <img src={search} className="site-nav-icons-img" />
                                </a>
                                <CartWidget />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <ul className='site-nav-ul'>
                        <li className='site-nav-item'>
                            <Link to="/home" className='site-nav-link'>
                                <span>HOME</span>
                            </Link>
                        </li>
                        <li className='site-nav-item'>
                            <Link to="/category/barrel" className='site-nav-link'>
                                <span>BARREL BAGS</span>
                            </Link>
                        </li>
                        <li className='site-nav-item'>
                            <Link to="/category/frame" className='site-nav-link'>
                                <span>FRAME BAGS</span>
                            </Link>
                        </li>
                        <li className='site-nav-item'>
                            <Link to="/category/duffel" className='site-nav-link'>
                                <span>DUFFEL BAGS</span>
                            </Link>
                        </li>
                        <li className='site-nav-item'>
                            <a className='site-nav-link'>
                                <span>SNEAKERS</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;