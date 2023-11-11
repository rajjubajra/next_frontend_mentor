import React from 'react'

function PageMenu({data, setState, state}) {
  return (
    <div className='flex gap-4'>
    {
          data 
          && data?.destinations 
          && data?.destinations?.length > 0
          && data?.destinations?.map((item, i)=> {
            return <div key={i} 
                onClick={() => setState(i)}
                className={`uppercase pb-2 cursor-pointer ${state === i && "border-b-2"}`}>
                  {item.name}
                  </div>
          })
    }
      
    </div>
  )
}

export default PageMenu
