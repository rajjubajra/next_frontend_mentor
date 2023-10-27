'use client';
import {useState, useEffect} from 'react';
import addons from './data_addons.json';
import FormHeading from './FormHeading';

function Step3({data, setData}) {

  const [checkedValues, setCheckedValues] = useState(data.addons || []);

  console.log("checked values: ",checkedValues);

  useEffect(()=> {
     //update the data state with the latest checkedValues in the useEffect
      setData({...data, addons:checkedValues});
  },[checkedValues])

  /** for input field */
  const handleCheckboxChange = (e) => {
    const {value, checked} = e.target;
    if(checked){
      //add the value to the array if the checkbox is checked
      setCheckedValues([...checkedValues, value]);
    }else{
      // Remove the value from the array if the checkbox is unchecked
      setCheckedValues(checkedValues.filter((item)=> item !== value));
    }
  }
  /** for onClick action */
  const updateCheckedValues = (value) => {
    console.log("update", value);
    if(checkedValues.includes(value)){
      // Remove the value from the array if the checkbox is unchecked
      setCheckedValues(checkedValues.filter((item) => item !== value));
    }else{
      //add the value to the array if the checkbox is checked
      setCheckedValues([...checkedValues, value]);
    }
  }

  return (
    <div className="w-full flex-col items-center justify-center">
              {/** Form-Heading */}
      <FormHeading 
        title="Pick Add-ons" 
        desc="Add-ons help enchance your gaming experience" />
      
      <div className='bg-white w-full rounded-lg '>
      {/** Select Plan Options */}

      <ul className='gap-5 w-full'>
      {
        addons.map((item, i) => {
          let ticked = checkedValues.some(sm => sm === item.addOnsId);
          return (
            <li key={i} onClick={() => updateCheckedValues(item.addOnsId)}>
            <div className={`${ticked ? "bg-slate-100" : "cursor-pointer"} "w-full flex border my-4 rounded-lg hover:bg-slate-100 cursor-pointer"`}>
                <div className='relative top-6 px-3'>
              <input type="checkbox" 
              checked={checkedValues.includes(item.addOnsId)}
              value={item.addOnsId} 
              onChange={handleCheckboxChange} />
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
          )
        })
      }
      </ul>  
      </div>
    </div>
  )
}

export default Step3
