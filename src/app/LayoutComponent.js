import {useState} from 'react';
import { Inter } from 'next/font/google'
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })
import Darkmode from '@/components/darkmode';


function LayoutComponent({children}) {

  /** Dark Mode State */
  const [mode, setMode] = useState('light');


  const [mainmenu, setMainmenu] = useState(false);


  return (
    <html lang="en" className={mode}>
    <body className={inter.className}>

        <div className='w-full z-50 flex justify-center'>
          <span onClick={() => setMainmenu(mainmenu ? false : true)} className='px-2.5 cursor-pointer text-yellow-400'>
          {mainmenu ? "-" : "+"}
          </span>
        </div>

        <div className={`${mainmenu ? "md:flex" : "hidden"} w-full justify-between md:px-8 px-4 md:my-10 my-4`}>
          <nav>
            <Link href="/">Home</Link>
          </nav>
          <div className="md:my-3 flex gap-4">  
            <Link 
              className="tracking-wide font-light" 
              href="https://www.frontendmentor.io/profile/rajjubajra"
              target="_blank">
                Frontend Mentor Challages
            </Link>
            <div className='-mt-1 ml-2'>
                <Darkmode setMode={setMode} mode={mode} />
            </div>
          </div>
        </div>

        <div>
          {children}
        </div>

  

      
    </body>
  </html>
  )
}

export default LayoutComponent
