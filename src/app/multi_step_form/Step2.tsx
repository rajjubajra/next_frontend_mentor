import Image from 'next/image';
import iconArcade from './assets/images/icon-arcade.svg';
import iconAdvance from './assets/images/icon-advanced.svg';
import iconPro from './assets/images/icon-pro.svg';
import FormHeading from './FormHeading';
import {MdOutlineToggleOff, MdOutlineToggleOn} from 'react-icons/md'



interface StepProps{
  setPlan:(param: any) => void;
  setYrmo: (param: any) => void;
  plan: string;
  yrmo: string;
}

export const Step2:React.FC<StepProps> = ({setPlan, setYrmo, plan, yrmo}) => {


  return (
    <div className="w-full flex-col items-center justify-center">
            <FormHeading
              title="Select Plan" 
              desc="You have the option of monthly or yearly billing" />
    <div className='bg-white w-full rounded-lg '>

      {/** Select Plan Options */}
      <div>
        <ul className='md:flex gap-7'>
        <li onClick={() => setPlan("Arcade")} >
            <div className={`${plan === "Arcade" ? "bg-slate-100" :"cursor-pointer"} "flex md:w-32 md:flex-col border my-4 rounded-lg hover:bg-slate-100"`}>
              <div className='p-4'>
                <Image src={iconArcade} width="50" height="50" alt="icon" />
              </div>
              <div className='py-4 md:px-4'>
                  <h3 className='font-bold'>Arcade</h3>
                  <p className='font-light'>$9/mo</p>
                  <p className='text-xs'>2 months free?</p>
              </div>
            </div> 
          </li>
          <li onClick={() => setPlan("Advance")}>
            <div className={`${plan === "Advance" ? "bg-slate-100" : "cursor-pointer"} "flex md:w-32 md:flex-col border my-4 rounded-lg hover:bg-slate-100"`}>
              <div className='p-4'> 
                <Image src={iconAdvance} width="50" height="50" alt="icon" />
              </div>
              <div className='py-4 md:px-4'>
                  <h3 className='font-bold'>Advance</h3>
                  <p className='font-light'>$12/mo</p>
                  <p className='text-xs'>2 months free</p>
              </div>
            </div>
          </li>
          <li onClick={() => setPlan("Pro")}>
            <div className={`${plan === "Pro" ? "bg-slate-100" : "cursor-pointer"} "flex md:w-32 md:flex-col border my-4 rounded-lg hover:bg-slate-100"`}>
              <div className='p-4'>
                <Image src={iconPro} width="50" height="50" alt="icon" />
              </div>
              <div className='py-4 md:px-4'>
                  <h3 className='font-bold'>Pro</h3>
                  <p className='font-light'>$15/mo</p>
                  <p className='text-xs'>2 months free</p>
              </div>
            </div>
          </li>
        </ul>
        <div className='w-full flex justify-around bg-slate-100 items-center py-2 '>
          <div 
          onClick={() => setYrmo("Monthly")}
          className='cursor-pointer'>Monthly</div>
          <div className='text-4xl'>
            { yrmo === 'Yearly' ?   <MdOutlineToggleOn /> : <MdOutlineToggleOff />}
          </div>
          <div
          onClick={() => setYrmo("Yearly")}
          className='cursor-pointer' >Yearly</div>
        </div>
      </div>
      </div>
    </div>
  )
}
