import Link from 'next/link';
import {useState} from 'react';
import Image from 'next/image';

function Desktop({menu}) {

  const [page, setPage] = useState('');

  return (
    <div className='md:w-[450px] lg:w-[729px] h-[96px] flex justify-end'>
      <ul className='flex gap-4 my-8 w-full text-center uppercase'>
          <Image 
          className='w-28 h-4 mr-8'
          src="/assets/ecommerce/images/logo.svg" width={100} height={50} alt='logo' />
          {
            menu && menu.map((item, i)=> {
              return (
                <li key={i} onClick={() => setPage(item.link)}>
                  <Link href={item.link} className={`${page === item.link && "border-b-4"} mr-6 flex text-sm pb-10 hover:border-b-4 border-orange-400`}>
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

