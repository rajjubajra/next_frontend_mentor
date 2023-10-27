import Image from 'next/image';
import iconArcade from './assets/images/icon-arcade.svg';
import iconAdvance from './assets/images/icon-advanced.svg';
import iconPro from './assets/images/icon-pro.svg';
import FormHeading from './FormHeading';
import {MdOutlineToggleOff, MdOutlineToggleOn} from 'react-icons/md';
import dataPlan from './data_plan.json';



function Step2({data, setData}) {

  console.log("url?", window.location.href);



  return (
    <div className="w-full flex-col items-center justify-center">
      <FormHeading
        title="Select Plan" 
        desc="You have the option of monthly or yearly billing" />

      <div className='bg-white w-full rounded-lg '>

      {/** Select Plan Options */}
      <div>
        <ul className='md:flex gap-7'>
          {
            dataPlan.map((item,i)=> {
              return <li key={i} onClick={() => setData({...data, plan: item.planId})}>
                  <div className={`${data.plan === item.planId ? "bg-slate-100" :"cursor-pointer"} 
                flex md:flex-col md:w-32 my-4 rounded-lg border hover:bg-slate-100`}>
                  <div className='p-4'>
                    <Image src={ window.location.origin + item.icon} width="50" height="50" alt="icon" />
                  </div>
                  <div className='py-4 md:px-4'>
                      <h3 className='font-bold'>{item.planId}</h3>
                      <p className='font-light'>
                      {
                        data.yrmo === "yr"
                        ? item.rate_yearly + "/yr"
                        : item.rate_monthy + "/mo"
                      }
                      </p>
                  </div>
                </div> 
              </li>
            })
          }
        </ul>
      </div>
      <div>
    
        <div className='w-full flex justify-around bg-slate-100 items-center py-2 '>
          <div 
          onClick={() => setData({...data, yrmo: "mo"})}
          className='cursor-pointer'>Monthly</div>
          <div className='text-4xl'>
            { data.yrmo === 'yr' ? <MdOutlineToggleOn />  : <MdOutlineToggleOff />} 
          </div>
          <div
          onClick={() => setData({...data, yrmo: "yr"})}
          className='cursor-pointer' >Yearly</div>
        </div>
      </div>
      </div>

      
    </div>
  )
}

export default Step2
