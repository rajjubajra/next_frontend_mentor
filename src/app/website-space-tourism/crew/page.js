'use client';
import {useState, useEffect} from 'react';
import data from '../data.json';
import Dots from './Dots';
import PageTitle from './PageTitle';
import Text from './Text';
import Picture from './Picture';

function Crew() {

  const [state, setState] = useState(0);
  const [crewInfo, setCrewInfo] = useState('');
  
  console.log(crewInfo);
  

  useEffect(()=> {

    data && data.crew.length && setCrewInfo(data?.crew[state])

  },[state])

  

  useEffect(()=> {
    const interval = setInterval(() => {
      state === 3 ? setState(0) : setState(state + 1)
    }, 4000);

    return () => {
      clearInterval(interval);
    };
    
  },[state])


  return (
    <div className="relative md:-top-24 -top-10
    w-full min-h-screen text-slate-100 
    lg:bg-[url('/assets/space_tourism/assets/crew/background-crew-desktop.jpg')]
    md:bg-[url('/assets/space_tourism/assets/crew/background-crew-tablet.jpg')]
    bg-[url('/assets/space_tourism/assets/crew/background-crew-mobile.jpg')]
    bg-cover
    grid lg:grid-cols-2
    md:px-0 px-4">

    {/** LEFT */}
    <div className='relative md:block lg:ml-28 md:mt-16 md:order-1 order-2'>

      {/** title */}
      <span className='hidden sm:block'><PageTitle /></span>

      {/** text content */}
      <div className='w-full flex lg:justify-start md:justify-center lg:mt-0 md:mt-10 '>
        <div className='md:w-[458px] grid'>

          {/** Text content */}
          <Text crewInfo={crewInfo} state={state} />

          {/** DOTS */}
          <div className='order-1 md:order-2 lg:my-0 my-4 lg:absolute lg:bottom-20 flex justify-center lg:justify-start'>
            <Dots state={state} />
          </div>
            
        </div>
      </div>
    </div>

    {/** RIGHT */}
    {/** title form Mobile device */}
      <div className='relative md:order-2 order-1'>
        <span className='block md:hidden'><PageTitle /></span>
        <div className='sm:absolute sm:bottom-0 w-full'>
          <Picture state={state} image={crewInfo?.images?.png} />
        </div>  
      </div>
    </div>
  )
}

export default Crew
