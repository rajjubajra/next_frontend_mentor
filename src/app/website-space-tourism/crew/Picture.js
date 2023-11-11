import Image from 'next/image';
import {useRef, useEffect} from 'react';
import gsap from 'gsap';

function Picture({image, state}) {

  console.log(image);
  //console.log("assets/space_tourism" );

  const elementRef = useRef(null);

  useEffect(()=> {
    //gsap animation logit
    const element = elementRef.current;
    //animation
    gsap.from(element, { duration: 1, scale: 0.5, opacity: 0.50, ease: 'power2.inOut' });
    gsap.to(element, { duration: 1, delay: 2, scale: 1, opacity: 1, ease: 'power2.inOut' });

    // Cleanup: optional but recommended
    return () => {
      // Ensure to clean up any ongoing GSAP animations when the component is unmounted
      gsap.killTweensOf(element);
    };

  },[state])


  return (
    
    <div ref={elementRef} 
    className='sm:border-none border-b border-slate-500 md:mt-0 mt-5 
    flex justify-center'>
        <Image 
        className='w-auto h-[222px] sm:h-[450px]'
        src={"/assets/space_tourism" + image?.slice(1)} width={500} height={650} alt='crew' />
    </div>
    
  )
}

export default Picture
