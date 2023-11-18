'use client';
import data from '../../data.json';
import Image from 'next/image';
import Thumbnail from '../productImage/Thumbnail';
import { useSelector, useDispatch } from 'react-redux';
import {goNext, goPrev} from '../../reduxSlice/imageSlice';
import { setLightBox } from '../../reduxSlice/imageSlice';


function LightBoxGallery() {

  const imageIndex = useSelector((state) => state.imageIndex.index);
  console.log(data);

  const dispath = useDispatch();
  
  return (
    <div className='w-full h-screen bg-slate-900/90 flex justify-center items-center'>
      <div>
      {/** close icon */}
        <div 
        onClick={() => dispath(setLightBox())} 
        className='cursor-pointer w-full flex justify-end pr-10 pb-2'>
        <Image 
        src="/assets/ecommerce/images/icon-close.svg" 
        alt='icon close' width={10} height={10} />
        </div>

        <div className='relative'>
          {/** NEXT BUTTON */}
          <div onClick={() => dispath(goPrev())}
          className='w-10 h-10 bg-slate-100 rounded-full 
          flex justify-center items-center cursor-pointer
          absolute top-[45%] left-4 z-50'>
            <Image src="/assets/ecommerce/images/icon-previous.svg" 
            width={10} height={10} alt='Previous button' />
          </div>
          {/** IMAGE */}
            <Image 
            className='relative left-9'
            src={data[0].productImage[imageIndex].img} 
            width={500} height={500} alt='product image' />
          
          {/** PREVIOUSE BUTTON */}
          <div onClick={() => dispath(goNext())}
          className='w-10 h-10 bg-slate-100 rounded-full 
          flex justify-center items-center cursor-pointer
          absolute top-[45%] right-4'>
            <Image src="/assets/ecommerce/images/icon-next.svg" 
            width={10} height={10} alt='Next button' />
          </div>
        </div>
      <Thumbnail />
      </div>
    </div>
  )
}

export default LightBoxGallery
