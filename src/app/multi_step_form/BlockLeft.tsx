import React from 'react';
import bgImage from './assets/images/bg-sidebar-desktop.svg';




const stepsArr = [
  {
    id: 1,
    step: 'Step 1',
    desc: 'Your info',
  },
  {
    id: 2,
    step: 'Step 2',
    desc: 'Select plan',
  },
  {
    id: 3,
    step: 'Step 3',
    desc: 'Add-ONS',
  },
  {
    id: 4,
    step: 'Step 4',
    desc: 'Summary',
  },
];

interface StepProp {
  setCurrentStepIndex:(index: number) => void;
  currentStepIndex: number;
}


const BlockLeft:React.FC<StepProp> = ({setCurrentStepIndex, currentStepIndex}) => {
  return (
    <div style={{backgroundImage:bgImage}}>
    <ul className='flex md:flex-col md:justify-normal justify-center'>
      {stepsArr && stepsArr.map((item, index) => (
        <li key={item.id} 
            className="flex my-4 group hover:cursor-pointer"
            onClick={()=> setCurrentStepIndex(index)}>
          <div className={`${index === currentStepIndex ? "bg-slate-300 w-10 h-10 flex justify-center items-center border rounded-full mr-4 group-hover:bg-slate-300 duration-200" : "w-10 h-10 flex justify-center items-center border rounded-full mr-4 group-hover:bg-slate-300 duration-200"}`}>
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