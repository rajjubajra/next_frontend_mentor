import Image from 'next/image';
import Picture from './Picture';



function ProductImage({imageUrl, setNumber, number, length}) {


  const gonext = () => (
    number < length -1 && setNumber(number + 1)
  )

  const goprev = () => (
    number !== 0 && setNumber(number - 1)
  )

  return (
    <div className='relative'>
        {/** ICON - PREV */}
        <div 
        onClick={() => goprev()}
        className='sm:hidden w-10 h-10 bg-slate-300 rounded-full flex justify-center items-center pr-1 cursor-pointer absolute top-[40%]'>
          <Image 
            src="/assets/ecommerce/images/icon-previous.svg" 
            width={10} height={10} alt='icon-next' />
        </div>

        {/** PRODUCT IMAGE */}
        <div>
            <Picture imageUrl={imageUrl} />
        </div>

        {/** ICON - NEXT */}
        <div 
        onClick={() => gonext() }
        className={`sm:hidden w-10 h-10 bg-slate-300 rounded-full flex justify-center items-center pl-1 cursor-pointer absolute top-[40%] right-0`}>
          <Image 
            src="/assets/ecommerce/images/icon-next.svg" 
            width={10} height={10} alt='icon-next' />
        </div>
    </div>
  )
}

export default ProductImage
