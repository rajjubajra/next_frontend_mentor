import { useMultipleStepForm } from "./useMultipleStepForm";


function NextBackButton({
  currentStepIndex, 
  isFirstStep, 
  isLastStep, 
  back, 
  next
}) { 




    return (
      <div className='w-full bg-white h-16 pt-4 px-4'>
        {!isFirstStep && !isLastStep && (
          <button 
            className="float-left"
            type="button" 
            onClick={back}>Back</button>
        )}
        { !isLastStep &&
          <button 
            className="float-right border px-4 py-2 rounded-lg bg-blue-900 text-slate-200 font-light text-xs"
            type="submit" 
            onClick={next}>
            {currentStepIndex + 1 === 4 ? "Confirm" : "Next"}
          </button>
        }
      </div>
    )
  
}

export default NextBackButton;
