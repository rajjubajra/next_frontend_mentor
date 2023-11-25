'use client';
import {useCountdown} from './useCountdown';
import Card from './Card';
import SocialIcons from './SocialIcons';


function CountdownTimer() {


  const {days, hours, minutes, seconds, launchMessage} = useCountdown();


  const array = [
    {
      "id": 1,
      "counting": days,
      "time": "Days" 
    },
    {
      "id": 2,
      "counting": hours,
      "time": "Hours" 
    },
    {
      "id": 3,
      "counting": minutes,
      "time": "Minutes" 
    },
    {
      "id": 4,
      "counting": seconds,
      "time": "Seconds" 
    }
  ]


  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center
    bg-[url('/assets/countdown_timer/images/pattern-hills.svg')] 
    bg-no-repeat 
    bg-bottom
    bg-stone-800
    text-slate-50">
      <h2 className='my-10 uppercase tracking-[0.3rem]'>We are launching soon</h2>
      {
        launchMessage === '' 
        ? <div className='flex md:gap-4 gap-2'>
            {
              array && array.map((item,i)=> {
                return <Card key={i} item={item} />
              })
            }
          </div>
        : <div>{launchMessage}</div>
      }


      {/** Social media icons */}
      <SocialIcons />
      
      
    </div>
  )
}

export default CountdownTimer