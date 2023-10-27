import dataStep from './data_steps.json';

function NextBackButton({step, setStep}) {
  return (
    <div className='w-full bg-white h-16 pt-4 px-4'>
    {
      step !== 0 && step < dataStep.length &&
      <div 
      className="float-left cursor-pointer"
      onClick={() => setStep(step - 1 )} >Back</div>
    }
      
    {
      step < dataStep.length && 
      <button 
        className="float-right border px-4 py-2 rounded-lg bg-blue-900 text-slate-200 font-light text-xs"
        type="submit">
        {step === dataStep.length -1 ? "Confirm" : "Next"}
        </button>
    }
      
    
    </div>
  )
}

export default NextBackButton
