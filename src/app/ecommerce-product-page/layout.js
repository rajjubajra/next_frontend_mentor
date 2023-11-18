import Header from './components/header';

function Layout({children}) {
  return (
    <div className='sm:px-10 lg:px-20'>
      <div className='relative'><Header /></div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout
