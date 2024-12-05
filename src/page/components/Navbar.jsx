import React, { useState } from 'react'
import LogoImg from '../../assets/images/LogoW.png';

import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <nav className='fixed top-0 left-0 w-full z-50 flex justify-between items-center flex-wrap h-[83px] bg-gradient-to-r from-blue-500 to-purple-700 text-txtColor'>
          <div className='flex justify-center items-center ml-1 md:ml-4'>
            <img src={LogoImg} className='w-16' alt="" />
            <h1 className='font-bold text-2xl tracking-wide -ml-2'>Sky Global</h1>
          </div>
          <div>
            <div className='mr-4 md:mr-10 text-txtColor'>
                <Link to='/' className='mr-6'>Home</Link>
                <Link to='/privacy-policy' className='text-nowrap mr-2'>Privacy Policy</Link>
              </div>
          </div>
      </nav>

        
    </>
  )
}

export default Navbar