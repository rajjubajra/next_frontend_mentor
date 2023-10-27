'use client';
import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import StepSummary from './StepSummary';
import BlockLeft from './BlockLeft';
import NextBackButton from './NextBackButton';
import { useMultiStepForm } from './useMulstiStepForm';

const MultiStepForm: React.FC = () => {


  

  const {
    data,
    setData,
    step,
    isFirstStep,
    isLastStep,
    next,
    back,
    goTo} = useMultiStepForm()

  
  const handleStepChange = (stepData: any) => {
    setData({ ...data, ...stepData });
  };



  return (
    <div>
    <div className="w-full mt-10  md:flex justify-center items-center">
      <div>
            {/** LEFT BLOCK: Only for Mobile View */}
            <div className="w-full md:hidden h-[200px] border bg-blue-600">
              <BlockLeft step={step} goTo={goTo} />
            </div>  
            {/** LEFT AND RIGHT BLOCK: for desktop view */}
            <div className='flex border p-4 rounded-xl md:bg-white bg-slate-100'> 
               {/** LEFT BLOCK: Desktop View */}
                <div className="hidden md:flex w-60 px-6 py-8 h-[500px] border bg-blue-600 md:rounded-xl">
                  <BlockLeft 
                  step={step}
                  goTo={goTo} />
                </div>
                {/** RIGHT BLOCK: Desktop and Mobile View */}
                <div className="relative -top-28 md:top-0 md:flex md:w-[600px] md:h-[500px] md:px-20 ">
                  <div className="md:w-full bg-white rounded-xl px-4 pb-10 md:p-0 mb:mb-0 mb-20">
                  {step === 0 && <Step1 onNext={handleStepChange} />}
                  {step === 1 && <Step2 onNext={handleStepChange} />}
                  {step === 2 && <Step3 onNext={handleStepChange} data={data} />}
                  {step === 3 && <StepSummary data={data} goTo={goTo} />}
                  </div>
                  {/** Next and back buttons */}
                  <div className='md:absolute hidden w-[450px] md:block bottom-0'>
                      <NextBackButton 
                        step={step}
                        next={next}
                        back={back}
                        isLastStep={isLastStep}
                        isFirstStep={isFirstStep}
                      />
                  </div> 
                </div>

                {/** Mobile View: Next and Back buttons **/}
                  <div className='md:hidden fixed bottom-0 w-full'>
                    <NextBackButton 
                      step={step}
                      next={next}
                      back={back}
                      isLastStep={isLastStep}
                      isFirstStep={isFirstStep}
                    />
                  </div> 
      
            </div>
      </div>
    </div>
    </div>
  );
};

export default MultiStepForm;