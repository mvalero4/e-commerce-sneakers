import { useContext, useState } from 'react';
import { useCartDetails } from './context/useCartDetails';

import sneakersLogo from '../assets/images/logo.svg';
import avatar from '../assets/images/image-avatar.png';
import { MenuIcon } from './MenuIcon';
import { CartIcon } from './CartIcon';
import { NavLink } from './NavLink';
import { CloseIcon } from './CloseIcon';
import { CartDetails } from './CartDetails';

export const Header = () => {

  const {totalQuantityProduct} = useContext(useCartDetails);

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenDetailsCart, setIsOpenDetailsCart] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(true); 
  };

  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <>
      <header className='container mx-auto flex items-center gap-8 p-4 md:p-0'>
        <button className='md:hidden' onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        
        <img className='mr-auto md:mr-0 h-5 mb-1' src={sneakersLogo} alt="Logo Sneakers" />
        
        <nav className={`font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 ${
            isOpenMenu 
              ? "absolute top-0 left-0 z-10 flex h-full w-4/5 flex-col gap-y-[21px] bg-white p-8"
              : "hidden"
            }`}>
          <button className='mb-12 md:hidden' onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <NavLink text="Collections" />
          <NavLink text="Men" />
          <NavLink text="Women" />
          <NavLink text="About" />
          <NavLink text="Contact" />
        </nav>
        
        <div className='flex gap-4'>
          <button className='relative' onClick={() => setIsOpenDetailsCart(!isOpenDetailsCart)}>
            <CartIcon />
            <span className='rigth-0 absolute top-0 translate-x-1 rounded-full bg-OrangePrimary px-2 text-xs font-bold text-white'>{totalQuantityProduct}</span>
          </button>
          <img className='w-10' src={avatar} alt="Avatar" />
          {isOpenDetailsCart && <CartDetails />}
        </div>
      </header>
      <span className='container hidden mx-auto h-[3px] bg-gray-500 md:block'></span>
    </>
   
  )
}