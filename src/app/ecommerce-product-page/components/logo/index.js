import Image from 'next/image';

function Logo() {
  return (
    <div className='sm:w-28'>
      <Image 
      className='w-28 h-4'
      src="/assets/ecommerce/images/logo.svg" 
      alt="logo"  width={200} height={150} />
    </div>
  )
}

export default Logo
