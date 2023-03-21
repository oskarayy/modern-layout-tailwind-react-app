import { useState } from 'react';
import { close, logo, menu } from '../assets';

import { navLinks } from '../constants';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ml-10 text-dimWhite hover:text-white transition`}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={menuActive ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setMenuActive((prev) => !prev)}
        />

        <div
          className={`${
            menuActive ? 'flex' : 'hidden'
          } py-6 px-12 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-center items-center flex-1'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`font-poppins font-normal cursor-pointer text-[18px] my-4  text-dimWhite hover:text-white transition`}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
