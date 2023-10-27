import React from 'react';
import bgImage from './assets/images/bg-sidebar-desktop.svg';
import stepsArr from './data_steps.json';




interface StepProp {
  goTo:(index: number) => void;
  step: number;
}


const BlockLeft:React.FC<StepProp> = ({step, goTo}) => {
  return (
    <div style={{backgroundImage:bgImage}}>
    <ul className='flex md:flex-col md:justify-normal justify-center'>
      {stepsArr && stepsArr.map((item, index) => (
        <li key={item.id} 
            className="flex my-4 group hover:cursor-pointer"
            onClick={()=> goTo(index)}>
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