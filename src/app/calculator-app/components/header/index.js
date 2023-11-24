'use client';
import {useState, useEffect} from 'react';


function Header({styleState, setStyleState}) {

  /** colour states */
  const [dot, setDot] = useState('');
  const [bg, setBg] = useState('');
  const [text, setText] = useState('')


  /** SET Colour */
  useEffect(()=> {

    if(styleState === 1){
        setBg('bg-slate-400')
        setDot('bg-orange-400');
        setText('text-slate-900')
    }

    if(styleState === 2){
        setBg('bg-blue-900')
        setDot('bg-orange-400');
        setText('text-slate-900')
    }
        
    if(styleState === 3){
        setBg('bg-purple-900')
        setDot('bg-blue-400');
        setText('text-yellow-300')
    }
        

  },[styleState])




  return (
    <div className={`${text} w-full flex justify-between`}>
      <div className='font-bold'>calc</div>
      <div className='flex'>
        <div className='text-xs uppercase py-2 px-2'>Theme</div>

        {/** style Number */}
        <div className={`text-[0.65rem]`}>
          <ul className='flex w-10 rounded-full my-1'>
            <li onClick={() => setStyleState(1)}
            className='w-2.5 h-2.5 cursor-pointer mx-0.5'>1</li>
            <li 
            onClick={() => setStyleState(2)}
            className='w-2.5 h-2.5 cursor-pointer mx-0.5'>2</li>
            <li 
            onClick={() => setStyleState(3)}
            className='w-2.5 h-2.5 cursor-pointer mx-0.5'>3</li>
          </ul>

          {/** style: selected icon */}
          <ul className={`flex w-10 rounded-full h-3.5 ${bg}`}>
            <li className={`${styleState === 1 ? dot : ""}  cursor-pointer w-2.5 h-2.5 mt-0.5 mx-0.5 rounded-full`}></li>
            <li className={`${styleState === 2 ? dot : ""}  cursor-pointer w-2.5 h-2.5 mt-0.5 mx-0.5 rounded-full`}></li>
            <li className={`${styleState === 3 ? dot : ""}  cursor-pointer w-2.5 h-2.5 mt-0.5 mx-0.5 rounded-full`}></li>
          </ul>


        </div>
      </div>
    </div>
  )
}

export default Header
