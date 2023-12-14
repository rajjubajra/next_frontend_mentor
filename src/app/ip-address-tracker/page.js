'use client';
import {useState} from 'react';
import InputField from './InputField';

function IpAddressTracker() {

  const [IPAddress, setIPAddress] = useState('');
  const [location, setLocation] = useState('');
  const [timezone, setTimezone] = useState('');
  const [isp, setIsp] = useState('');


  return (
    <div className='flex flex-col items-center w-full'>
      <h1 className='my-10 text-2xl font-bold text-slate-500'>IP Address Tracker</h1>
      <div>
        <InputField IPAddress={IPAddress} setIPAddress={setIPAddress}/>
      </div>
      <div className='grid grid-cols-4 w-[60rem] px-10 py-4 h-32 my-10 border'>
        <div className='border-r'>
          <div className='text-[0.7rem] text-slate-500 uppercase tracking-widest'>IP Address</div>
          <div>{IPAddress}</div>
        </div>
        <div className='border-r pl-6'>
          <div className='text-[0.7rem] text-slate-500 uppercase tracking-widest'>Location</div>
          <div className='text-2xl my-2 font-semibold'>{location}</div>
        </div>
        <div className='border-r pl-6'>
          <div className='text-[0.7rem] text-slate-500 uppercase tracking-widest'>Timezone</div>
          <div>{timezone}</div>
        </div>
        <div className='pl-6'>
          <div className='text-[0.7rem] text-slate-500 uppercase tracking-widest'>ISP</div>
          <div>{isp}</div>
        </div>
      </div>
    </div>
  )
}

export default IpAddressTracker
