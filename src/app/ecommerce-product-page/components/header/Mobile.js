import Link from 'next/link';

function mobile({menu, setOpen}) {
  return (
    <div className='absolute pl-6 h-screen w-[254px]'>
      <ul>
          {
            menu && menu.map((item, i)=> {
              return (
                <li key={i} 
                  className='my-8 uppercase' 
                  onClick={()=> setOpen(false)}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              )
            })
          }
      </ul>
    </div>
  )
}

export default mobile
