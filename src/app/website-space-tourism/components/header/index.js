'use client';
import Logo from '../logo';
import {useState} from 'react';
import MobileMenuIcon from './mobileMenuIcon.js';
import Mobile from './Mobile';
import Desktop from './Desktop';
import { barlowCondensed } from '../fonts';


const menu = [
  {
    "id": 1,
    "title": "Home",
    "link": "/website-space-tourism",  
  },
  {
    "id": 2,
    "title": "Destination",
    "link": "/website-space-tourism/destination",  
  },
  {
    "id": 3,
    "title": "Crew",
    "link": "/website-space-tourism/crew",  
  },
  {
    "id": 4,
    "title": "Technology",
    "link": "/website-space-tourism/technology",  
  }
]

function Header() {

  const [open, setOpen] = useState(false);

  return (
    <div className={barlowCondensed.className}>
    {/** Mobile device */}
      <div className='sm:hidden'>
        <div className='w-full flex justify-between px-4'>
          <Logo />
          <MobileMenuIcon  open={open} setOpen={setOpen} />
        </div>
        <div className={`${open ? "block" : "hidden"} relative flex justify-end duration-300`}>
          <Mobile menu={menu} setOpen={setOpen} />
        </div>
      </div>

    {/** Desktop device */}
      <div className='relative z-10 w-full hidden md:flex justify-between'>
        <div className='mt-5 ml-10 w-full'>
            <Logo />
            <div className='block md:border-t border-slate-300/30 relative -top-7 left-28 w-[83%] 2xl:left-32 2xl:w-[90%] lg:w-[85%] md:w-[65%]'></div>
        </div>
        <div>
          <Desktop menu={menu} />
        </div>
      </div>
    </div>
  )
}

export default Header
