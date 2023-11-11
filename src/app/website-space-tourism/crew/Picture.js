import Image from 'next/image';

function Picture({image, state}) {

  console.log(image);
  console.log("assets/space_tourism" );
  return (
    
    <div className='sm:border-none border-b border-slate-500 md:mt-0 mt-5 
    flex justify-center'>
        <Image 
        className='w-auto h-[222px] sm:h-[450px]'
        src={"/assets/space_tourism" + image?.slice(1)} width={500} height={650} alt='crew' />
    </div>
    
  )
}

export default Picture
