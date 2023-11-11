import Image from 'next/image';

function Picture({data, state}) {

  return (
    <div>
      <Image 
      className='lg:w-[515px] lg:h-auto sm:h-[310px] h-[170px] w-full'
      src={"/assets/space_tourism" + data.images.landscape.slice(1)}
      width={700}
      height={600}
      alt='technology'
      />
    </div>
  )
}

export default Picture
