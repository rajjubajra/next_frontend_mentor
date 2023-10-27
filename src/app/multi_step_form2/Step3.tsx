'use client'
import { useEffect, useState } from 'react';
import FormHeading from './FormHeading';
import addOnsData from './data_addons.json';


interface Step3Props {
  onNext: (data: { addons: string[] }) => void;
}

const Step3: React.FC<Step3Props> = ({ onNext, data }) => {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const handleCheckboxChange = (addon: string) => {
    if (selectedAddons.includes(addon)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== addon));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  useEffect(()=> {
      onNext({ addons: selectedAddons });
  },[selectedAddons])
    


  return ( 
    <div className="w-full flex-col items-center justify-center">
              {/** Form-Heading */}
              <FormHeading 
              title="Pick Add-ons" 
              desc="Add-ons help enchance your gaming experience" />
      <div className='bg-white w-full rounded-lg '>
      {/** Select Plan Options */}

      <h2>Step 3: Choose Add-Ons</h2>
      <ul className='gap-5 w-full'>
        {
            addOnsData.map((item, i)=> {
              let ticked = selectedAddons.some(sm => sm === item.addOnsId);
              return <li key={i} onClick={() => handleCheckboxChange(item.addOnsId)}>
                <div className={`${ticked ? "bg-slate-100" : "cursor-pointer"} "w-full flex border my-4 rounded-lg hover:bg-slate-100 cursor-pointer"`}>
                <div className='relative top-6 px-3'>
                <input
                  type="checkbox"
                  value={item.addOnsId}
                  checked={selectedAddons.includes(item.addOnsId)}
                  onChange={() => handleCheckboxChange(item.addOnsId)}
                />
              </div>
                <div className='py-4 md:px-4 flex justify-between w-full'>
                <div className='md:text-sm text-xs tracking-tight'>
                  <h3 className='font-bold'>{item.addOnsId}</h3>
                  <p className='font-light'>{item.desc}</p>
                </div>
                <div className='md:text-sm text-xs py-3 pr-2 text-blue-400'>
                  ${ 
                      data.yrmo === "yr" 
                      ? item.rate_yearly + "/yr" 
                      : item.rate_monthly + "/mo"
                  }
                </div>        
                </div> 
              </div>
            </li>
          })
        }
      </ul>  
      </div>
    </div>
  );
};

export default Step3;



{
  /**
   * <label>
        <input
          type="checkbox"
          value="Online-Services"
          checked={selectedAddons.includes('Online-Services')}
          onChange={() => handleCheckboxChange('Online-Services')}
        />
        Online Services
      </label>
      <label>
        <input
          type="checkbox"
          value="Large-Storage"
          checked={selectedAddons.includes('Large-Storage')}
          onChange={() => handleCheckboxChange('Large-Storage')}
        />
        Large Storage
      </label>
      <label>
        <input
          type="checkbox"
          value="Custom-Profile"
          checked={selectedAddons.includes('Custom-Profile')}
          onChange={() => handleCheckboxChange('Custom-Profile')}
        />
        Custom Profile
      </label>
      <button onClick={handleNext}>Next</button>
   */
}