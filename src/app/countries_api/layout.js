import Header from "./Header"

function Layout({children}) {
  return (
    <div>
      <div className="mx-5">
        <Header />
      </div>
      {children}
    </div>
  )
}

export default Layout
