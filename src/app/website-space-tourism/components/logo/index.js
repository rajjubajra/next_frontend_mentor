import Image from 'next/image';

function Logo() {
  return (
    <div>
      <Image 
      className='md:w-14 md:h-14 w-10 h-10'
      src="/assets/space_tourism/assets/shared/logo.svg" alt="logo" width={100} height={100} />
    </div>
  )
}

export default Logo
