

function Dots({state}) {

  const dotArr = [ 0, 1, 2, 3];


  return ( 
      <ul className='flex gap-4'>
        {
          dotArr.map((item,i) => {
            return <li 
              onClick={()=> setState(i)}
              className={`w-2 h-2 rounded-full ${state === i ? "bg-slate-50": "bg-slate-500 cursor-pointer"}`} key={i}>
            </li>
          })
        }
      </ul>
  )
}

export default Dots
