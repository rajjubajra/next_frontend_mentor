'use client';
import data from '../data.json';
import {useState, useEffect} from 'react';
import DistanceTravel from './DistanceTravel';
import Picture from './Picture';
import PageTitle from './PageTitle';
import PageMenu from './PageMenu';
import Body from './Body';

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
          <PageTitle />
          <div className='flex justify-center'>
            <Picture image={image} />
          </div>
      </div>


    {/** RIGHT BLOCK */}
      <div className='w-full lg:min-h-screen flex justify-center items-center'>
        <div className='sm:w-[445px] sm:h-[472px] relative md:top-10 top-5'>

        {/** Header Menu */}
        <div className='relative flex lg:justify-start justify-center'>
        <PageMenu data={data} state={state} setState={setState} />
        </div>

        {/** body contents */}
        <div className='text-center lg:text-left'>
            <Body name={name} desc={desc} />

            {/** distance and Travel time */}
            <div className='flex flex-col sm:flex-row md:justify-between lg:justify-start md:px-20 lg:px-0 md:gap-20 gap-5 border-t border-slate-400/50 mt-10 pt-5 sm:h-auto h-80'>
              <DistanceTravel dist={dist} trvTime={trvTime} />
            </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Destination
