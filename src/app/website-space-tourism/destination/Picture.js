import Image from 'next/image';

function Picture({image}) {
  return (
    <div>
      <Image 
          className='sm:w-[300px] w-[170px]'
          src={"/assets/space_tourism"+ image} width={400} height={400} alt="planet" />
    </div>
  )
}

export default Picture
