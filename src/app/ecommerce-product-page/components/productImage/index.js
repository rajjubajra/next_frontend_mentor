import Image from 'next/image';
import Picture from './Picture';
import Thumbnail from './Thumbnail';
import { useDispatch } from 'react-redux';
import {goNext, goPrev} from '../../reduxSlice/imageSlice';




function ProductImage({imageUrl, setNumber, number, length}) {


  const dispatch = useDispatch();


  return (
    <div className='relative'>
        {/** ICON - PREV */}
        <div 
        onClick={() => dispatch(goPrev())}
        className='sm:hidden w-10 h-10 bg-slate-300 rounded-full flex justify-center items-center pr-1 cursor-pointer absolute top-[40%]'>
          <Image 
            src="/assets/ecommerce/images/icon-previous.svg" 
            width={10} height={10} alt='icon-next' />
        </div>

        {/** PRODUCT IMAGE */}
        <div>
          {/** Main Image */}
          <span>
            <Picture imageUrl={imageUrl} />
          </span>
          
          {/** Thumbnail Image */}
          <Thumbnail />
        </div>

        {/** ICON - NEXT */}
        <div 
        onClick={() => dispatch(goNext()) }
        className={`sm:hidden w-10 h-10 bg-slate-300 rounded-full flex justify-center items-center pl-1 cursor-pointer absolute top-[40%] right-0`}>
          <Image 
            src="/assets/ecommerce/images/icon-next.svg" 
            width={10} height={10} alt='icon-next' />
        </div>
    </div>
  )
}

export default ProductImage
