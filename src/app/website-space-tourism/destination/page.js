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
    <div className="bg-[url('/assets/space_tourism/assets/destination/background-destination-desktop.jpg')] bg-cover w-full min-h-screen relative -top-24 z-10 text-white grid grid-cols-2">

      {/** LEFT BLOCK WITH THE TITLE */}
      <div className='w-full h-screen flex flex-col justify-center items-center'>

        {/** Image and title on left */}
          <h2 className='my-5 mb-10 text-2xl uppercase font-thin tracking-widest'>
          <span className='font-bold text-slate-500'>01</span> Pick your destination
          </h2>
          <Image src={"/assets/space_tourism"+ image} width={400} height={400} alt="planet" />

      </div>

    {/** RIGHT BLOCK */}
      <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='w-[445px] h-[472px] relative 2xl:top-10 md:top-28'>
        {/** Header Menu */}
        <div className='flex gap-2 relative'>
        {
          data 
          && data?.destinations 
          && data?.destinations?.length > 0
          && data?.destinations?.map((item, i)=> {
            return <div key={i} 
                onClick={() => setState(i)}
                className={`uppercase mx-2 pb-2 cursor-pointer ${state === i && "border-b-2"}`}>
                  {item.name}
                  </div>
          })
        }
        </div>
        {/** body contents */}
        <div className="relative top-5">
            <div className={bellefair.className}>
              <h1 className='text-[100px] uppercase'>{name}</h1>
            </div>
            <div>
              <div className='font-light' dangerouslySetInnerHTML={{__html: desc }} />
            </div>
            <div className='flex gap-20 border-t border-slate-400/50 mt-14'>
              <div>
                <p className='text-xs uppercase'>Avg. distance</p>
                <p className='text-2xl'>{dist}</p>
              </div>
              <div>
                <p className='text-xs uppercase'>Est. Travel Time</p>
                <p className='text-2xl'>{trvTime}</p>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
