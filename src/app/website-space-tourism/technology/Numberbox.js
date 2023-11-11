import React from 'react'

function Numberbox({data, state, setState}) {


  return (
    <div className='flex lg:flex-col gap-4 justify-center'>
            {
              data && data.map((item,i)=>{
                return <div 
                onClick={() => setState(i)}
                className={`lg:w-[80px] lg:h-[80px]
                md:w-[60px] md:h-[60px]
                w-[40px] h-[40px]
                rounded-full text-slate-600 
                flex justify-center items-center
                ${state === i ? "bg-slate-50" : "border border-slate-50 cursor-pointer" }`}
                key={i}>{i + 1}</div>
              })
            }
    </div>
  )
}

export default Numberbox
