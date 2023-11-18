import Link from 'next/link';
import {useState} from 'react';
import Logo from '../logo';
import {cartClose} from '../../reduxSlice/cartSlice';
import { useDispatch } from 'react-redux';

function Desktop({menu}) {

  const [page, setPage] = useState('');
  const dispatch = useDispatch();

  const navOnClickAction = (item) => {
    setPage(item);
    dispatch(cartClose());
  }

  return (
    <div className='md:w-[450px] lg:w-[729px] h-[96px] flex justify-end'>
      <ul className='flex gap-5 my-8 w-full text-center uppercase'>
          <li onClick={() => setPage("/ecommerce-product-page")}
          className='w-28 h-4'>
            <Link href="/ecommerce-product-page" className='cursor-pointer w-28 h-4'>
              <Logo />
            </Link>
          </li>
          {
            menu && menu.map((item, i)=> {
              return (
                <li key={i} onClick={() => navOnClickAction(item.link)}>
                  <Link href={item.link} className={`${page === item.link && "border-b-4"} flex text-sm pb-10 hover:border-b-4 border-orange-400`}>
                  <span className='tracking-widest'>{item.title}</span>
                  </Link>
                </li>
              );
            })
          }
      </ul>
    </div>
  )
}

export default Desktop

