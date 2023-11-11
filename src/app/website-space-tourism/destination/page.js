'use client';
import data from '../data.json';
import {useState, useEffect} from 'react';
import { bellefair } from '../components/fonts';
import Image from 'next/image';

function Destination() {
  
  console.log(data.destinations);
  const [state, setState] = useState(0);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [dist, setDist] = useState('');
  const [trvTime, setTrvTime] = useState('');
  const [image, setImage] = useState('');

  useEffect(()=> {
    const {description, distance, images, name, travel} = data?.destinations[state];
    setName(name);
    setDesc(description);
    setDist(distance);
    setTrvTime(travel);
    setImage(images.png.slice(1))//removing "." dot from the image-url
  },[state])


  return (
    <div className="bg-[url('/assets/space_tourism/assets/destination/background-destination-desktop.jpg')] bg-cover w-full lg:min-h-screen relative  top-10  z-10 text-white grid lg:grid-cols-2 md:grid-cols-1">

      {/** LEFT BLOCK WITH THE TITLE */}
      <div className='w-full lg:h-screen flex flex-col'>

        {/** Image and title on left */}
          <h2 className='my-5 sm:ml-28 md:mb-10 mb-5 text-2xl text-[16px] sm:text-left text-center uppercase font-thin tracking-widest'>
          <span className='font-bold text-slate-500'>01</span>
          Pick your destination
          </h2>
          <div className='flex justify-center'>
          <Image 
          className='sm:w-[300px] w-[170px]'
          src={"/assets/space_tourism"+ image} width={400} height={400} alt="planet" />
          </div>
      </div>

    {/** RIGHT BLOCK */}
      <div className='w-full lg:min-h-screen flex justify-center items-center'>
        <div className='sm:w-[445px] sm:h-[472px] relative md:top-10 top-5'>

        {/** Header Menu */}
        <div className='flex gap-4 relative lg:justify-start justify-center'>
        {
          data 
          && data?.destinations 
          && data?.destinations?.length > 0
          && data?.destinations?.map((item, i)=> {
            return <div key={i} 
                onClick={() => setState(i)}
                className={`uppercase pb-2 cursor-pointer ${state === i && "border-b-2"}`}>
                  {item.name}
                  </div>
          })
        }
        </div>

        {/** body contents */}
        <div className='text-center lg:text-left'>
            <div className={bellefair.className}>
              <h1 className='sm:text-[100px] text-[56px] uppercase'>{name}</h1>
            </div>
            <div>
              <div className='font-light px-6 md:px-0' dangerouslySetInnerHTML={{__html: desc }} />
            </div>

            {/** distance and Travel time */}
            <div className='flex flex-col sm:flex-row md:justify-between lg:justify-start md:px-20 lg:px-0 md:gap-20 gap-5 border-t border-slate-400/50 mt-10 pt-5 sm:h-auto h-80'>
              <div>
                <p className='text-xs uppercase'>Avg. distance</p>
                <p className='sm:text-2xl text-[28px] uppercase font-light'>
                <span className={bellefair.className}>{dist}</span>
                </p>
              </div>
              <div>
                <p className='text-xs uppercase'>Est. Travel Time</p>
                <p className='text-2xl uppercase text-[28px]'>
                <span className={bellefair.className}>{trvTime}</span>
                </p> 
              </div>
            </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Destination
