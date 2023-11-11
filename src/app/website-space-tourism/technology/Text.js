import { useEffect, useRef } from "react";
import { bellefair } from "../components/fonts";
import gsap from 'gsap';

function Text({data, state}) {


  const elementRef = useRef(null);
  

  useEffect(()=> {
      
      const element = elementRef.current;
      gsap.from(element,{duration:1, opacity:0, ease: 'power2.inOut'});
      gsap.to(element, {duration:1, opacity:1, ease: 'power2.inOut'});

  },[state])

  return (
    <div ref={elementRef}
    className='lg:w-[570px] lg:h-[330px] md:w-[458px] md:h-[237px] text-center lg:text-left px-6 lg:pr-20 '>
        <h3 className="uppercase font-thin text-[16px] lg:mb-3">The terminology...</h3>
        <div className="uppercase text-xl md:text-4xl lg:text-5xl tracking-wide mb-10">
          <span className={bellefair.className}>
          {data.name}
          </span>
        </div>
        <div className="text-[18px] font-thin">{data.description}</div>
    </div>
  )
}

export default Text