'use client';
import Logo from '../logo';
import {useState} from 'react';
import MobileMenuIcon from './mobileMenuIcon.js';
import Mobile from './Mobile';
import Desktop from './Desktop';
import { barlowCondensed } from '../fonts';
import CartIcon from './CartIcon';
import Cart from '../cart';


const menu = [
  {
    "id": 1,
    "title": "Collections",
    "link": "/",  
  },
  {
    "id": 2,
    "title": "Men",
    "link": "/",  
  },
  {
    "id": 3,
    "title": "Women",
    "link": "/",  
  },
  {
    "id": 4,
    "title": "About",
    "link": "/",  
  },
  {
    "id": 5,
    "title": "Contact",
    "link": "/",  
  }
]

function Header() {

  const [open, setOpen] = useState(false);
  const [viewCart, setViewCart] = useState(false);

  return (
    <div className={barlowCondensed.className}>
    {/** Mobile device */}
      <div className={`sm:hidden py-1 ${open ? "bg-slate-500/50 min-h-screen": ""} `}>
        <div className='w-full px-2'>
          <MobileMenuIcon  open={open} setOpen={setOpen} />
        </div>
        <div className={`${open ? "block" : "hidden"} relative flex justify-start duration-300`}>
          <Mobile menu={menu} setOpen={setOpen} />
        </div>
      </div>


    {/** Desktop device */}
      <div className='relative z-10 w-full hidden md:flex justify-between border-b'>
        <div className='flex justify-between w-full'>
          <Desktop menu={menu} />
          <div className='mt-7'>
            <CartIcon setViewCart={setViewCart}  viewCart={viewCart}/>
          </div>
        </div>
        { viewCart 
        ?  <div className='absolute top-20 right-2 shadow-lg'>
            <Cart />
            </div>
        :  ""
        }
        
      </div>

      
    </div>
  )
}

export default Header
