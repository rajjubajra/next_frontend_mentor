import Header from './components/header';
import {barlowCondensed} from './components/fonts';
function Layout({children}) {
  return (
    <div className='bg-slate-900'>
      <div className='relative top-5 z-40'>
        <Header />
      </div>
      
      <div className={barlowCondensed.className}>
        {children}
      </div>
    </div>
  )
}

export default Layout
