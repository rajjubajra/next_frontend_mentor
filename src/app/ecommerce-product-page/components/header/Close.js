import Image from 'next/image';

function Close() {
  return (
    <div>
    <Image 
    className='w-[19.09px] h-[19.09px]'
    src="/assets/space_tourism/assets/shared/icon-close.svg" alt="logo" width={40} height={40} />
  </div>
  )
}

export default Close
