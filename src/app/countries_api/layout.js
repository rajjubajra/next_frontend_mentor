import Header from "./Header"

function Layout({children}) {
  return (
    <div>
      <div>
        <Header />
      </div>
      {children}
    </div>
  )
}

export default Layout
