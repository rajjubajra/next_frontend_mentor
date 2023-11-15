import Image from 'next/image';

function Hammenu() {
  return (
    <div>
      <Image 
      className='w-[24px] h-[21px]'
      src="/assets/space_tourism/assets/shared/icon-hamburger.svg" 
      alt="logo" 
      width={40} 
      height={40} />
    </div>
  )
}

export default Hammenu
