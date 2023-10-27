import FormHeading from './FormHeading';
import addOnsData from './data_addons.json';



interface CheckboxProps{
  value: string;
  data: object;
  setCheckboxValues:(param: any) => void;
  checkboxValues: Array<React.FC[]>;
}

export const Step3 = ({
  data,
  setCheckboxValues,
  checkboxValues
}: CheckboxProps) => {

  

  
 
    /** input checkbox action */
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; // Get the value of the checkbox that triggered the change
    if (checkboxValues.includes(value)) {
      // If the checkbox value is already in the array, remove it
      
      setCheckboxValues(checkboxValues.filter(item => item !== value));
    } else {
      // If the checkbox value is not in the array, add it
      setCheckboxValues([...checkboxValues, value]);
    }
  }

  /** by onClick action */
  const handleCheckboxOnClick = (value:string) => {
  
    if (checkboxValues.includes(value)) {
      // If the checkbox value is already in the array, remove it
      
      setCheckboxValues(checkboxValues.filter(item => item !== value));
    } else {
      // If the checkbox value is not in the array, add it
      setCheckboxValues([...checkboxValues, value]);
    }
  }


  


  return (
    <>
    <div className="w-full flex-col items-center justify-center">
              {/** Form-Heading */}
              <FormHeading 
              title="Pick Add-ons" 
              desc="Add-ons help enchance your gaming experience" />
    <div className='bg-white w-full rounded-lg '>

      {/** Select Plan Options */}
      
        <ul className='gap-5 w-full'>
          {
            addOnsData.map((item,i)=> {
              let ticked = data.addOns.some(sm => sm === item.addOnsId);
              return <li key={i} onClick={() => handleCheckboxOnClick(item.addOnsId)}>
                <div className={`${ticked ? "bg-slate-100" : "cursor-pointer"} "w-full flex border my-4 rounded-lg hover:bg-slate-100 cursor-pointer"`}>
                <div className='relative top-6 px-3'>
                    <input type="checkbox"
                    checked={checkboxValues.includes(item.addOnsId)}
                    value={item.addOnsId}
                    onChange={handleCheckboxChange} 
                    />
                </div>
                <div className='py-4 md:px-4 flex justify-between w-full'>
                <div className='md:text-sm text-xs tracking-tight'>
                  <h3 className='font-bold'>{item.addOnsId}</h3>
                  <p className='font-light'>{item.desc}</p>
                </div>
                <div className='md:text-sm text-xs py-3 pr-2 text-blue-400'>
                  ${ data.billingOption === "Yearly" 
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
  </>
  )
}

