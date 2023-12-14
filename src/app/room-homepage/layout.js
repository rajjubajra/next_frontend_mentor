'use client';
import {useState} from 'react';
import { League_Spartan } from 'next/font/google'
import Headers from './Headers';



const leagueSpartaner = League_Spartan({
  subsets: ['latin'],
  variable: '--font-leagueSpartaner'
})


function Layout({children}) {

  const [mobileMenuState, setMobileMenuState] = useState(false);


  return (
    <div className={`relative ${leagueSpartaner.variable} font-sans`}>
      <div className='relative z-50'><Headers 
        mobileMenuState={mobileMenuState} 
        setMobileMenuState={setMobileMenuState} />
      </div>
      <div className={`${mobileMenuState ? "mt-3": "absolute top-0"}`}>
        {children}
      </div>
      
    </div>
  )
}

export default Layout
