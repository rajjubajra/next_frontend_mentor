import Image from 'next/image';

function Picture({imageUrl}) {
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
      <div>
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