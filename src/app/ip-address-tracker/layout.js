import { Rubik } from 'next/font/google';



const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik'
})

function Layout({children}) {
  return (
    <div className={`relative ${rubik.variable} font-rubik`}>
      {children}
    </div>
  )
}

export default Layout
