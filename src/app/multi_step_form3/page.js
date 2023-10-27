'use client';
import {useState} from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import StepSummary from './StepSummary';
import BlockLeft from './BlockLeft';
import { StepThankyou } from './StepThankyou';
import NextBackButton from './NextBackButton';

function MultiStepForm() {

  const [step, setStep] = useState(0);

  const [data, setData] = useState({
    username: '',
    email: '',
    phone: '',
    plan: '',
    yrmo: 'yr', 
    addons: []
  });

  console.log(data);

  const [formData, setFormData] = useState();
  console.log("Form Data: ",formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({...data, formData});
    setStep(step + 1)
  }

  return (
    <div>
    <div className="w-full mt-10  md:flex justify-center items-center">   
      <form onSubmit={handleSubmit}>
          {/** LEFT BLOCK: Only for Mobile View */}
          <div className="w-full md:hidden h-[200px] border bg-blue-600">
              <BlockLeft step={step} setStep={setStep} />
          </div>
          {/** LEFT AND RIGHT BLOCK: for desktop view */}
          <div className='flex border p-4 rounded-xl md:bg-white bg-slate-100'> 
               {/** LEFT BLOCK: Desktop View */}
                <div className="hidden md:flex w-60 px-6 py-8 h-[500px] border bg-blue-600 md:rounded-xl">
                  <BlockLeft 
                  step={step}
                  setStep={setStep} />
                </div>
           {/** RIGHT BLOCK: Desktop and Mobile View */}
          <div className="relative -top-28 md:top-0 md:flex md:w-[600px] md:h-[500px] md:px-20 ">
              <div className="md:w-full bg-white rounded-xl px-4 pb-10 md:p-0 mb:mb-0 mb-20">
              {step === 0 && <Step1 data={data} setData={setData} />}
              {step === 1 && <Step2 data={data} setData={setData} />}
              {step === 2 && <Step3 data={data} setData={setData} />}
              {step === 3 && <StepSummary data={data} setStep={setStep} />}
              {step === 4 && <StepThankyou />}
              </div>
           {/** Next and back buttons */}
          <div className='md:absolute hidden w-[450px] md:block bottom-0'>
              <NextBackButton step={step} setStep={setStep} />
          </div> 
          </div>
        </div>
         {/** Mobile View: Next and Back buttons **/}
        <div className='md:hidden fixed bottom-0 w-full'>
            <NextBackButton step={step} setStep={setStep} />
        </div>
      </form>
    </div>  
    </div>
  )
}

export default MultiStepForm
