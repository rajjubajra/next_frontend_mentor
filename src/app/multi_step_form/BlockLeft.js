import React from 'react';
import stepsArr from './data_steps.json';






const BlockLeft = ({step, setStep}) => {



  return (
    <div>
    <ul className='flex md:flex-col md:justify-normal justify-center'>
      {stepsArr && stepsArr.map((item, index) => (
        <li key={item.id} 
            className="flex my-4 group hover:cursor-pointer"
            onClick={()=> setStep(index)}>
          <div className={`${index === step ? "bg-slate-300 w-10 h-10 flex justify-center items-center border rounded-full mr-4 group-hover:bg-slate-300 duration-200" : "w-10 h-10 flex justify-center items-center border rounded-full mr-4 group-hover:bg-slate-300 duration-200"}`}>
              {item.id}
          </div>
          <div className='hidden md:block'>
            <p className="font-light text-xs uppercase">{item.step}</p>
            <p className="font-bold uppercase text-xs">{item.desc}</p>
          </div>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default BlockLeft;