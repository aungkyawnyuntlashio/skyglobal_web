import React, { useState } from 'react'
import LogoImg from '../../assets/images/LogoW.png';
import pop from '../../assets/images/pop.png';
import popbg from '../../assets/images/popbg.png';

import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <nav className='fixed top-0 left-0 z-50 flex justify-between items-center flex-wrap w-full h-[80px] bg-white text-primary'>
          <div className='flex justify-center items-center ml-1 md:ml-4'>
            <div className='flex justify-center items-center ml-2'>
              <img src={popbg} className='w-10 absolute animate-outerspin' alt="" />
              <img src={pop} className='w-10 relative animate-innerspin' alt="" />
            </div>
            <h1 className='font-bold text-2xl tracking-wide ml-2'>Sky Global</h1>
          </div>
          <div>
            <div className='mr-10 md:mr-10 text-primary font-semibold'>
                <Link to='/' className='mr-6'>Home</Link>
                <Link to='/privacy-policy' className='text-nowrap mr-2'>Privacy Policy</Link>
              </div>
          </div>
      </nav>

        
    </>
  )
}

export default Navbar