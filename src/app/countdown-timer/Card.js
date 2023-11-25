import React from 'react'

function Card({item}) {
  return (
    <div>
        <div className='relative text-slate-800'>


          {/** top text */}
          <div className='md:text-3xl font-bold md:w-20 md:h-20 w-16 h-16 
          bg-slate-200/90 rounded-lg
          flex justify-center items-center'>
          <span className='relative md:top-0 top-2'>{item.counting}</span>
          </div>

          {/** overlaping same text */}
          <div className='absolute top-10 rounded-b-lg
          md:text-3xl font-bold md:w-20 md:h-10 w-16 h-8
          bg-slate-200 border-t border-slate-50/50
          flex justify-center items-center shadow-lg'>
          <span className='relative md:-top-[1.31rem] -top-[0.98rem]'>{item.counting}</span>
          </div>
          {/** left / right bullet */}
          <div className='before:w-3 before:h-3
                          before:absolute
                          before:bg-slate-800
                          before:rounded-full
                          before:-left-2
                          before:top-[2.15rem]
                          after:w-3 after:h-3
                          after:absolute
                          after:bg-stone-800
                          after:rounded-full
                          after:left-[4.7rem]
                          after:top-[2.15rem]'></div>
        </div>
        
        <div className='my-10 text-center text-[0.60rem] uppercase md:tracking-[0.2rem]'>
        {item.time}</div>
    </div>
  )
}

export default Card
