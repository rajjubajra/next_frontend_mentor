
type ButtonProps = {
  step: number;
  next: () => void;
  back: () => void;
  isLastStep: number;
  isFirstStep:number;
}

function NextBackButton({
  next, back, step, isLastStep, isFirstStep
}: ButtonProps){ 


    return (
      <div className='w-full bg-white h-16 pt-4 px-4'>
        {  step !== isFirstStep && (
          <button 
            className="float-left"
            type="button" 
            onClick={back}>Back</button>
        )}
        { step !== isLastStep &&
          <button 
            className="float-right border px-4 py-2 rounded-lg bg-blue-900 text-slate-200 font-light text-xs"
            type="submit" 
            onClick={next}>
            {step === isLastStep ? "Confirm" : "Next"}
          </button>
        }
      </div>
    )
  
}

export default NextBackButton;
