import Link from 'next/link';

function mobile({menu}) {
  return (
    <div className='absolute -top-20 w-[224px] h-screen pt-32 pl-8 bg-slate-800/90 '>
      <ul>
          {
            menu && menu.map((item, i)=> {
              return (
                <li key={i} className='my-8 text-slate-100 uppercase'>
                  <Link href={item.link}><span className='font-bold pr-2'>0{i}</span>{item.title}</Link>
                </li>
              )
            })
          }
      </ul>
    </div>
  )
}

export default mobile
