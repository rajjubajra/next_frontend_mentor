'use client';
import {useState, useEffect} from 'react';
import data from '../data.json';
import Picture from './Picture';
import Text from './Text';
import Numberbox from './Numberbox';
import Title from './Title';



function Technology() {

  const [state, setState] = useState(0)
  
  useEffect(() => {

    const interval = setInterval(() => {
      state === 2 ? setState(0) : setState(state + 1)
    }, 4000);

    return () => {
      clearInterval(interval);
    };
    
  },[state])

  return (
    <div className="relative md:-top-24 -top-10
    w-full min-h-screen text-slate-100 
    lg:bg-[url('/assets/space_tourism/assets/crew/background-technology-desktop.jpg')]
    md:bg-[url('/assets/space_tourism/assets/crew/background-technology-tablet.jpg')]
    bg-[url('/assets/space_tourism/assets/crew/background-technology-mobile.jpg')]
    bg-cover">

      <div className='mt-20 md:mt-40 lg:mt-36 block'>
        <Title />
      </div>

      <div className='relative flex flex-col lg:flex-row'>

        {/** NUMBER-BOX */}
        <div className='order-2 lg:order-1 w-full lg:my-0 md:my-10 my-5
        lg:flex lg:justify-center lg:items-center'>
          <Numberbox 
          data={data.technology} 
          state={state} 
          setState={setState}  
          />
        </div>

        {/** TEXT BOX */}
        <div className='order-3 lg:order-2 w-full flex justify-center
        lg:items-center'>
          <Text data={data.technology[state]} />
        </div>

        {/** IMAGE */}
        <div className='order-1 lg:order-3 w-full'>
          <Picture data={data.technology[state]} state={state} />
        </div>

      </div>
    </div>
  )
}

export default Technology