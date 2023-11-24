import {useState, useEffect} from 'react';


function Result({result, errorMessage, calc, styleState}) {

  const [bg, setBg] = useState('');

  
  useEffect(()=> {

    if(styleState === 1){
        setBg('bg-slate-100')
    }

    if(styleState === 2){
        setBg('bg-blue-900 text-slate-100')
    }
        
    if(styleState === 3){
        setBg('bg-purple-800 text-yellow-300')
    }

  },[styleState])



  return (
    <div className={`${bg} h-16`}>
    <div className="text-xs mx-1 h-4 text-right">
    {result === 0 ? '': calc}</div>
    {
      errorMessage === ''
      ? <div 
        className='p-2 w-full text-right font-bold text-2xl'>
        {result === 0 ? calc : result}</div>
      : <div
        className='p-2 w-full text-right font-bold text-2xl'>
        {errorMessage}</div>
    }
    </div>
  )
}

export default Result
