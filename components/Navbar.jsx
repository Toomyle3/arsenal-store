import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineHeart, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Cart } from './';

import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className='navbar-container'>
      <div className='col-sm-1'>
        <p className='logo'>
          <Link href="/"><img alt="" src="https://cdn.media.amplience.net/i/ArsenalDirect/arsenal-crest" className="img-responsive"></img></Link>
        </p>
      </div>
      <div className='col-sm-11'>
        <div className='row border-header'>
          <div className='col-sm-12'>
            <div className='col-sm-6 padding-header-p'>
              <p style={{ fontWeight: 'bold', fontSize:'1.2vw' }}><span style={{ color: 'red' }}>ARSENAL DIRECT</span> THE OFFICIAL ONLINE STORE</p>
            </div>
            <div className='col-sm-6 text-right'>
              <button type='button' className='cart-icon padding-header'>
                <AiOutlineUser />
              </button>
              <button type='button' className='cart-icon padding-header'>
                <AiOutlineHeart />
              </button>
              <button type='button' className='cart-icon padding-header'>
                <AiOutlineSearch />
              </button>
              <button type="button" className="cart-icon padding-header" onClick={() => setShowCart(true)}>
                <AiOutlineShopping />
                <span className="cart-item-qty">{totalQuantities}</span>
              </button>

              {showCart && <Cart />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar