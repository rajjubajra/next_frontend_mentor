'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import iconArcade from './assets/images/icon-arcade.svg';
import iconAdvance from './assets/images/icon-advanced.svg';
import iconPro from './assets/images/icon-pro.svg';
import FormHeading from './FormHeading';
import {MdOutlineToggleOff, MdOutlineToggleOn} from 'react-icons/md'



interface Step2Props {
  onNext: (data: { 
      plan: string,
      yrmo: string }) => void;
}

const Step2: React.FC<Step2Props> = ({ onNext }) => {

  const [select, setSelect] = useState({ 
              plan: "", 
              yrmo: "yr"});


  useEffect(()=> {
    onNext(select) 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[select])
  
    
  

  return (
    <div className="w-full flex-col items-center justify-center">
      <FormHeading
        title="Select Plan" 
        desc="You have the option of monthly or yearly billing" />

      <div className='bg-white w-full rounded-lg '>

        {/** Select Plan Options */}
        <div>
          <ul className='md:flex gap-7'>
            <li onClick={() => setSelect({...select, plan:'Arcade'})}>
              <div className={`${select.plan === "Arcade" ? "bg-slate-100" :"cursor-pointer"} "flex md:w-32 md:flex-col border my-4 rounded-lg hover:bg-slate-100"`}>
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
            <li onClick={() => setSelect({...select, plan:'Advance'})}>
              <div className={`${select.plan === "Advance" ? "bg-slate-100" : "cursor-pointer"} "flex md:w-32 md:flex-col border my-4 rounded-lg hover:bg-slate-100"`}>
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
            <li onClick={() => setSelect({...select, plan:'Pro'})}>
              <div className={`${select.plan === "Pro" ? "bg-slate-100" : "cursor-pointer"} "flex md:w-32 md:flex-col border my-4 rounded-lg hover:bg-slate-100"`}>
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
            onClick={() => setSelect({...select, yrmo: "mo"})}
            className='cursor-pointer'>Monthly</div>
            <div className='text-4xl'>
              { select.yrmo === 'yr' ? <MdOutlineToggleOn />  : <MdOutlineToggleOff />} 
            </div>
            <div
            onClick={() => setSelect({...select, yrmo: "yr"})}
            className='cursor-pointer' >Yearly</div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Step2;
