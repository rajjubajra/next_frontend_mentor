import Image from 'next/image';
import { setLightBox } from '../../reduxSlice/imageSlice';
import { useDispatch } from 'react-redux';

function Picture({imageUrl}) {

  const dispatch = useDispatch()

  return (
    <div>

    {/** Mobile View */}
    <div className='sm:hidden'>
      <Image 
        src={imageUrl} 
        width={600} 
        height={500} 
        alt='Product' />
    </div>


    {/** desktop */}
    <div className='sm:block hidden px-10 pt-10'>
      <div onClick={() => dispatch(setLightBox())}>
        <Image 
          src={imageUrl} 
          width={600} 
          height={500} 
          alt='Product' />
      </div>
    </div>
      
    </div>
  )
}

export default Picture