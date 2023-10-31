import Hammenu from './Hammenu';
import Close from './Close';


function MobileMenuIcon({open ,setOpen}) {


  return (
    <div className='relative top-0 z-50'>
      <span className={open ? "hidden": "block"} onClick={() => setOpen(true)}>
        <Hammenu  />
      </span>
      <span className={open ? "block" : "hidden"} onClick={() => setOpen(false) }>
        <Close />
      </span>
    </div>    
  )
}

export default MobileMenuIcon
