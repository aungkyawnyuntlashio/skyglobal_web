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
      <nav className='flex justify-between items-center flex-wrap h-[80px] w-screen bg-gradient-to-r from-blue-500 to-purple-600 text-txtColor'>
          <div className='flex justify-center items-center ml-6'>
            <img src={LogoImg} className='w-20' alt="" />
            <h1 className='font-bold text-2xl tracking-wide -ml-2'>Sky Global</h1>
          </div>
          <div>
            <div className='mr-10 text-txtColor'>
                <Link to='/' className='mr-8'>Home</Link>
                <Link to='/privacy-policy' className='text-nowrap'>Privacy Policy</Link>
              </div>
          </div>
      </nav>

        
    </>
  )
}

export default Navbar