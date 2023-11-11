import {useRef, useEffect} from 'react';
import { bellefair } from '../components/fonts';
import gsap from 'gsap';

function Text({crewInfo, state}) {

  const elementRef = useRef(null);

  useEffect(()=> {
    const element = elementRef.current;

    gsap.from(element,{duration:1, opacity:0, ease: 'power2.inOut'});
    gsap.to(element,{duration:1, opacity:1, ease: 'power2.inOut'});
    
  },[state])

  return (
    <div 
    ref={elementRef}
    className='order-2 md:order-1 lg:text-left text-center '>
      <div className='uppercase md:text-[32px] text-[16px]  text-slate-400 font-thin lg:mt-20'>
        <span className={bellefair.className}>{crewInfo?.role}</span>
      </div>
      <div className='md:text-[40px] text-[24px] uppercase font-thin'>
        <span className={bellefair.className}>{crewInfo?.name}</span>
      </div>
      <div className='lg:mt-10 text-[18px] text-slate-400'>{crewInfo?.bio}</div>
    </div>
  )
}

export default Text
