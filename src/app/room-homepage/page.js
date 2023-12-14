'use client';
import {useState} from 'react';
import data from './data.json';
import BlockOne from './BlockOne';
import BlockTwo from './BlockTwo';
import AngleArrowLeft from './AngleArrowLeft';
import AngleArrowRight from './AngleArrowRight';


function RoomHomepage() {

  const [state, setState] = useState(0);

  return (
    <div>
      <div className="grid lg:grid-cols-12 w-full">

      {/** grid - 1 */}
        <div className="relative lg:col-span-7 lg:h-[30rem] h-52 bg-cover bg-center bg-no-repeat"
        style={{backgroundImage:"url('" + data[state].bgImage +"')"}}>

          <div className='flex lg:hidden absolute bottom-0 right-0'>
            <AngleArrowLeft state={state} setState={setState} data={data} />
            <AngleArrowRight state={state} setState={setState} data={data} />
          </div>

        </div>

      {/** grid - 2 */}
        <div className="relative lg:col-span-5 flex justify-center items-center lg:my-0 my-10">
            <BlockOne data={data} state={state} />
            <div className='lg:flex absolute bottom-0 left-0 hidden'>
              <AngleArrowLeft state={state} setState={setState} data={data} />
              <AngleArrowRight state={state} setState={setState} data={data} />
            </div>
        </div>
      
      {/** grid - 3 */}
        <div className="h-72 lg:col-span-3 bg-[url('/assets/room_homepage/images/image-about-dark.jpg')] w-full bg-cover bg-center bg-no-repeat"></div>

      {/** grid - 4 */}
        <div className="lg:col-span-6">
          <BlockTwo />
        </div>
      
      {/** grid - 5 */}
        <div className="h-72 lg:col-span-3 bg-[url('/assets/room_homepage/images/image-about-light.jpg')] bg-no-repeat bg-cover bg-center"></div>
      </div>

    </div>
  )
}

export default RoomHomepage
