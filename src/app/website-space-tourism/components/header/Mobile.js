import Link from 'next/link';

function mobile({menu, setOpen}) {
  return (
    <div className='absolute -top-16 pl-6 h-screen pt-32 w-[254px] bg-slate-800/90 '>
      <ul>
          {
            menu && menu.map((item, i)=> {
              return (
                <li key={i} className='my-8 text-slate-100 uppercase' 
                onClick={()=> setOpen(false)}>
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
