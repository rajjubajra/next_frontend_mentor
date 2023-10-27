'use client';
import {FormEvent, useState, useEffect } from 'react';
import BlockLeft from './BlockLeft';
import {Step1} from './Step1';
import {Step2} from './Step2';
import {Step3} from './Step3';
import {StepSummary} from './StepSummary';
import {StepThankyou} from './StepThankyou';
import {useMultipleStepForm} from './useMultipleStepForm'; 
import NextBackButton from './NextBackButton';




type FormData = {
  target: any;
  username: string;
  email: string;
  phone: string;
  planOption: string;
  billingOption: string;
  addOns: React.FC[];
}


const INITIAL_DATA: FormData = {
  target: "",
  username:"",
  email:"",
  phone:"",
  planOption:"",
  billingOption:"",
  addOns:[],
}



const ThreeStepForm: React.FC = () => {
  
  

  const [data, setData] = useState(INITIAL_DATA);
  //console.log("data : ",data);

  function updateFields(fields: Partial<FormData>){
      setData(prev => {
        return {...prev, ...fields}
      })
  }


  /** Step 2 : States */
  const [plan, setPlan] = useState('Arcade');
  const [yrmo, setYrmo] = useState("Yearly");
  useEffect(() => {
      return updateFields({planOption: plan});
  },[plan])
  useEffect(() => {
    return updateFields({billingOption: yrmo});
},[yrmo])


/** Step 3 : States */
const [checkboxValues, setCheckboxValues] = useState([]);
useEffect(() => {
  return updateFields({addOns: checkboxValues});
},[checkboxValues])

  const {
    steps, 
    currentStepIndex, 
    setCurrentStepIndex,
    step, 
    isFirstStep, 
    isLastStep, 
    back, 
    next} = useMultipleStepForm([
      <Step1 key="step1" {...data} updateFields={updateFields} />,
      <Step2 
      key="step2" 
      setPlan={setPlan}
      setYrmo={setYrmo}
      plan={plan}
      yrmo={yrmo}
      />,
      <Step3 
      key="step3" 
      data={data}
      setCheckboxValues={setCheckboxValues}
      checkboxValues={checkboxValues}
      />,
      <StepSummary 
      key="step4" 
      data={data} 
      />,
      <StepThankyou key="step5" />,
    ])

   //console.log("step: ",currentStepIndex);

    function onSubmit(event: FormEvent) {
      event.preventDefault();
      //if(isLastStep) return next()
      //alert("Successfull")
      // const formElement = event.target as HTMLFormElement; // Type assertion
      // const data = new FormData(formElement);
      // const postdata = Object.fromEntries(data.entries());

      console.log("data: ",data);
    }

    return (
      <div>
      <div className="w-full mt-10  md:flex justify-center items-center">
        
        <form onSubmit={onSubmit}>
          <div>
            {currentStepIndex + 1} / {steps.length}
          </div>
          <div>
            {/** LEFT BLOCK: Only for Mobile View */}
            <div className="w-full md:hidden h-[200px] border bg-blue-600">
              <BlockLeft
              currentStepIndex={currentStepIndex}
              setCurrentStepIndex={setCurrentStepIndex} />
            </div>

            {/** LEFT AND RIGHT BLOCK: for desktop view */}
            <div className='flex border p-4 rounded-xl md:bg-white bg-slate-100'> 
               {/** LEFT BLOCK: Desktop View */}
                <div className="hidden md:flex w-60 px-6 py-8 h-[500px] border bg-blue-600 md:rounded-xl">
                  <BlockLeft 
                  currentStepIndex={currentStepIndex}
                  setCurrentStepIndex={setCurrentStepIndex} />
                </div>

                {/** RIGHT BLOCK: Desktop and Mobile View */}
                <div className="relative -top-28 md:top-0 md:flex md:w-[600px] md:h-[500px] md:px-20 ">
                  <div className="md:w-full bg-white rounded-xl px-4 pb-10 md:p-0 mb:mb-0 mb-20">
                  {step}
                  </div>

                  {/** Next and back buttons */}
                    <div className='md:absolute hidden w-[450px] md:block bottom-0'>
                      <NextBackButton 
                      currentStepIndex={currentStepIndex}
                      isLastStep={isLastStep}
                      isFirstStep={isFirstStep}
                      next={next}
                      back={back}
                      />
                    </div> 
                </div>
            </div>  

          </div>

          
        {/** Mobile View: Next and Back buttons **/}
        <div className='md:hidden fixed bottom-0 w-full'>
          <NextBackButton 
            currentStepIndex={currentStepIndex}
            isLastStep={isLastStep}
            isFirstStep={isFirstStep}
            next={next}
            back={back}
          />
        </div> 


        </form>
      </div>
      </div>
    )



};

export default ThreeStepForm;
