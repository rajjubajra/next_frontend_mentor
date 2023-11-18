'use client';
import Logo from '../logo';
import {useState} from 'react';
import MobileMenuIcon from './mobileMenuIcon.js';
import Mobile from './Mobile';
import Desktop from './Desktop';
import { barlowCondensed } from '../fonts';
import CartIcon from './CartIcon';
import Cart from '../cart';
import Link from 'next/link';
import { useSelector } from 'react-redux';


const menu = [
  {
    "id": 1,
    "title": "Collections",
    "link": "/ecommerce-product-page/collections",  
  },
  {
    "id": 2,
    "title": "Men",
    "link": "/ecommerce-product-page/men",  
  },
  {
    "id": 3,
    "title": "Women",
    "link": "/ecommerce-product-page/women",  
  },
  {
    "id": 4,
    "title": "About",
    "link": "/ecommerce-product-page/about",  
  },
  {
    "id": 5,
    "title": "Contact",
    "link": "/ecommerce-product-page/contact",  
  }
]

function Header() {

  const [open, setOpen] = useState(false);
  //const [viewCart, setViewCart] = useState(false);

  const viewCart = useSelector((state) => state.counter.cartView);
  console.log("View Cart", viewCart);

  return (
    <div className={barlowCondensed.className}>
    {/** Mobile device */}
      <div className={`relative sm:hidden py-1 ${open ? "bg-slate-500/50 min-h-screen": ""} `}>
        <div className='w-full flex justify-between px-2 py-1'>
          {/** Logo and burger menu Icon */}
          <div className='flex gap-4'>
            <span><MobileMenuIcon  open={open} setOpen={setOpen} /></span>
            {
              open ? "" : <Link href="/ecommerce-product-page"><span><Logo /></span></Link>
            }
            
          </div>
          {/** Cart Icon and Avatar */}
          {
            open ? "" 
            : <div className='-mt-2'>
                <CartIcon />
              </div>
          }
          
        </div>
        <div className={`${open ? "block" : "hidden"} 
        relative flex justify-start duration-300`}>
          <Mobile menu={menu} setOpen={setOpen} />
        </div>
        { viewCart 
        ?  <div className='right-2 shadow-lg m-2'>
            <Cart />
            </div>
        :  ""
        }
      </div>


    {/** Desktop device */}
      <div className='relative z-10 w-full hidden md:flex justify-between border-b'>
        <div className='flex justify-between w-full'>
          <Desktop menu={menu} />
          <div className='mt-7'>
            <CartIcon />
          </div>
        </div>
        { viewCart 
        ?   <div className='absolute top-20 right-2 shadow-lg'>
              <Cart />
            </div>
        :  ""
        }
        
      </div>

      
    </div>
  )
}

export default Header
