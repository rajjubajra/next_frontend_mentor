import Link from 'next/link';
import Image from 'next/image';
import data_menu from './data_menu.json'



function Headers({mobileMenuState, setMobileMenuState}) {

  console.log('setMobileMenuState', mobileMenuState)

  return (
    <div className={`lg:py-12 lg:px-16 ${mobileMenuState ? "text-slate-600" : "text-slate-200"}`}>
      <div className={`${mobileMenuState ? "flex lg:flex": "lg:flex"} lg:gap-14`}> 
      {/** desktop view */}
        <div className='hidden lg:block text-2xl relative top-1'>
          <Image 
          className='lg:w-16'
          src="/assets/room_homepage/images/logo.svg" 
          alt='logo' width={100} height={50} />
        </div>


      {/** Mobile View */}
        <div className='lg:hidden flex gap-[35%] pt-5 pl-4'>
          <div onClick={() => setMobileMenuState(mobileMenuState ? false : true)}>
            <Image
            className={`${mobileMenuState ? "hidden": ""} w-5 h-2.5`}
            src="/assets/room_homepage/images/icon-hamburger.svg" 
            alt="Hamburger icon" width={14} height={14}
            />
            <Image
            className={`${mobileMenuState ? "": "hidden"} w-4 h-4 relative -top-1`}
            src="/assets/room_homepage/images/icon-close.svg" 
            alt="Hamburger icon" width={14} height={14}
            />
          </div>
          
          <Image 
          className={`${mobileMenuState ? "hidden": "flex"} w-10 h-2.5`}
          src="/assets/room_homepage/images/logo.svg" 
          alt='logo' width={100} height={50} />
        </div>

        <ul className={`${mobileMenuState ? "flex mt-3.5 ml-5" : "hidden lg:flex"  } lg:gap-8 gap-4`}>
        {
          data_menu?.map(item => {
            return <li key="item.id" className='group'>
                <Link href={item.link}>{item.title}</Link>
                <div className='group-hover:border w-[70%] mx-[12%]'></div>
            </li>
          })
        }
        </ul>
      </div>
    </div>
  )
}

export default Headers
