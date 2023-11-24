'use client';
import {useState, useEffect} from 'react';
import Header from './components/header';
import Result from './components/result';
import Typepad from './components/typepad';




function CalculatorApp() {


  /** Style state: style indicator '1 2 3' and dots state */
  const [styleState, setStyleState] = useState(1);
  /** calculation result */
  const [result, setResult] = useState(0);
  /** OnClick key value in 'String' */
  const [calc, setCalc] = useState(0);
  /** calculation functionality limitation */
  const [limitation, setLimitation] = useState(true);
  /** Error message */
  const [errorMessage, setErrorMessage] = useState('')
  /** Full page -  BG colour state */
  const [bg, setBg] = useState('');


  /** Set Backgroun colour */
  useEffect(()=> {

    if(styleState === 1){
        setBg('bg-white');
    }

    if(styleState === 2){
        setBg('bg-slate-500');
    }
        
    if(styleState === 3){
        setBg('bg-indigo-950');
    }

  },[styleState])


  /** Calculation option NOT used in Result */
  const [item, setItem] = useState(0);
  console.log("First cal: ",item);
      useEffect(()=> {
      const toArray = calc && calc.split(/([+\-*/])/);
      console.log("To Array: ",toArray);
      console.log("lenght", toArray.length);
      if(toArray.length === 3 && toArray[2] !== ''){
        const res = toArray.join('')
        /** removes all the leading 0 "zero" */
        const newVal = res.replace(/^0+/, '');
        setItem(eval(newVal)) 
      }
  },[calc])
  /** un-used calculation option closed */



  
  /** final calculation */
  const doCalculate = (str) => {

    /** removes all the leading 0 "zero" */
    const value = str.replace(/^0+/, '');
    
    const options = {
      style: 'decimal', // or 'currency', 'percent', etc.
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };

    try{
      setResult(eval(value).toLocaleString('en',options))// with comma separation
    }catch{
      setResult("Error")
    }

  }

  /** Reset Button Action */
  const doReset = () => {
    setResult(0);
    setCalc(0);
    setErrorMessage('')
  }

  /** populate calculation state */
  const populateCalc = (str) => {
    setCalc((prev) => prev + str);
  }

  {/** KEY VALUE ACTION */}
  const keyValue = (val) => {
    switch(val){
      case '=':
        return doCalculate(calc);
      case 'del':
        return setCalc(calc.slice(0,-1));
      case 'reset':
        return doReset();
      default:
        return populateCalc(val);
    }
  }

  return (
    <div className={`${bg} relative -top-20 w-full h-screen flex justify-center mt-20`}>
      <div className='w-96 mt-20'>

      {/** HEADER */}
        <div className='mx-6' >
          <Header 
            styleState={styleState} 
            setStyleState={setStyleState} />
        </div>

        {/** DISPLAY SCREEN */}
        <div className='my-2 mx-6'>
          <Result 
            result={result} 
            calc={calc}
            errorMessage={errorMessage}
            styleState={styleState}
            />
        </div>

        {/** KEY PAD */}
        <div className='mx-6'>
          <Typepad 
            keyValue={keyValue}
            styleState={styleState} />
        </div>

      </div>
    </div>
  )
}

export default CalculatorApp