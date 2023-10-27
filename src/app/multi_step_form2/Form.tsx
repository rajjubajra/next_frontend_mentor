import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { ButtonProps } from "./types";


const Form = ({next,back, currentStepIndex}: ButtonProps) => {

  switch(currentStepIndex) {
    case 1:
      return <Step1 next={next}  back={back} />
    case 2:
      return <Step2 next={next} back={back} />
    
    case 3:
      return <Step3 next={next} back={back} />
    
    default:
      return <Step1 next={next}  back={back} />

  }
}

export default Form