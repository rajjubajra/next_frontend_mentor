import Link from 'next/link';
import {useState} from 'react';

function Desktop({menu}) {

  const [page, setPage] = useState('')


  return (
    <div className='w-[729px] h-[96px] bg-slate-700/90 flex justify-end'>
      <ul className='flex gap-4 my-8 ml-20 w-full text-center uppercase'>
          {
            menu && menu.map((item, i)=> {
              return (
                <li key={i} onClick={() => setPage(item.link)}>
                  <Link href={item.link} className={`${page === item.link && "border-b-2"} mr-8 text-white text-sm pb-10 hover:border-b-2`}>
                  <span className='font-bold pr-2 tracking-widest'>0{i}</span>
                  <span className='tracking-widest'>{item.title}</span></Link>
                </li>
              );
            })
          }
      </ul>
    </div>
  )
}

export default Desktop

