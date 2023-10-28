import Image from 'next/image';


function Logo() {
  return (
    <div>
      <Image 
      className='w-28 mt-2'
      src="/assets/images/logo.svg" width={50} height={50} alt="logo" />
    </div>
  )
}

export default Logo
