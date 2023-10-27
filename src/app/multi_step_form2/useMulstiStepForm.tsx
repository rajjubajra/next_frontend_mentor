'use client';
import {useState} from 'react'
import stepsArr from './data_steps.json';



export function useMultiStepForm(){

  const [currentStep, setCurrentStep] = useState(0);


  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    yrmo: '',
    addons: [] as string[],
  });

  //console.log("Steps arr: ",stepsArr,stepsArr.length);
  console.log("",data);

  const next = () => {
    console.log("next button pressed")
    currentStep < stepsArr.length &&
    setCurrentStep( currentStep + 1 );
  }
  const back = () => {
    console.log("back button pressed")
    currentStep !== 0 &&
    setCurrentStep( currentStep - 1 );
  }

  const goTo = (i:number) => {
    setCurrentStep(i)
  }

  return {
    data,
    setData,
    step: currentStep,
    isFirstStep: 0,
    isLastStep: stepsArr.length,
    next,
    back,
    goTo
  }

}