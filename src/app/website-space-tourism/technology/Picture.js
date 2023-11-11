import {useRef, useEffect} from 'react';
import Image from 'next/image';
import gsap from 'gsap';




function Picture({data, state}) {

  const elementRef = useRef(null);
  useEffect(()=> {
      
      const element = elementRef.current;
      gsap.from(element,{duration:1, opacity:0, ease: 'power2.inOut'});
      gsap.to(element, {duration:1, opacity:1, ease: 'power2.inOut'});

  },[state])

  return (
    <div ref={elementRef}>
      <Image 
      className='lg:w-[515px] lg:h-auto sm:h-[310px] h-[170px] w-full'
      src={"/assets/space_tourism" + data.images.landscape.slice(1)}
      width={700}
      height={600}
      alt='technology'
      />
    </div>
  )
}

export default Picture
