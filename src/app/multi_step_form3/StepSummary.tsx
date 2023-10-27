import FormHeading from "./FormHeading";
import plandata from './data_plan.json';
import addOnsData from './data_addons.json';


interface StepSummaryProps {
  data: {
    plan: string;
    yrmo: string;
    addons: string[];
  };
  setStep: () => void;
}



const StepSummary: React.FC<StepSummaryProps> = ({ data, setStep }) => {

  const getRate = (planId:string, billing:string) => {
    const index = plandata.findIndex(item => item.planId === planId)
    const amt = billing === "yr" ? plandata[index].rate_yearly : plandata[index]?.rate_monthy;
    return amt;
  }

  const addonsArr = (addOn:string, billing:string) => {
    const index = addOnsData.findIndex( a => a.addOnsId === addOn)
    return  <div className="my-2" >
              <div className='w-full flex justify-between'>
                <div>{addOn}</div>
                <div>
                {
                  billing === 'yr'
                  ? "+$" + addOnsData[index].rate_yearly + "/" + "yr"
                  : "+$" + addOnsData[index].rate_monthly + "/"+ "mo"
                }
                </div>
              </div>
          </div>   
  }

  const addonsTotal = (billing:string) => {

    // Initialize variables to store the sum of rate_monthly and rate_yearly
      let sumMonthly = 0;
      let sumYearly = 0;

      data.addons.forEach(addOn => {
        const matchingAddOn = addOnsData.find(data => data.addOnsId === addOn);
        if (matchingAddOn) {
          sumMonthly += matchingAddOn.rate_monthly;
          sumYearly += matchingAddOn.rate_yearly;
        }
      });
      
      console.log('Sum of rate_monthly:', sumMonthly);
      console.log('Sum of rate_yearly:', sumYearly);
      return billing === "yr" ? sumYearly : sumMonthly;

  }



  const billingTerm = () => {
    return data.yrmo === 'yr' ? "Yearly" : "Monthly";
  }

  return (
    <>
    <div className="w-full flex-col items-center justify-center">
    {/** title block */}
    <FormHeading 
        title="Finishing up"
        desc="Double-check everything looks OK before confirming"
      />


    {/** body contents */}  
    <div className="w-full">
      {/** Plan-Option Summary */}
      <div className="w-full flex justify-between bg-slate-100 px-3 py-5 rounded-t-md">
          <div>
            <h3 className="font-bold">{`${data.plan}(${billingTerm()})`}</h3>
            <span
            onClick={() => setStep(1)}
            className="font-light underline cursor-pointer"
            >Change</span>
          </div>
          <div className="font-bold">
          $ {getRate(data.plan, data.yrmo)}/{data.yrmo}
          </div>
        </div>

        {/** AddOns Summary */}
        <div className="border-t py-5 bg-slate-100 px-3 font-light rounded-b-md">
          {
           // data.addons.join(', ')
          }
          
          {
              data.addons.map((item:string)=> addonsArr(item, data.yrmo))
          }
          
        </div>


    </div>


     {/** Total Amount */}
    <div className="mt-10 w-full flex justify-between">
          <div>Total ({data.yrmo === "yr" ? "Per year" : "Per month"})</div>
          <div>
            +$ {
              getRate(data.plan, data.yrmo) 
              +
              addonsTotal(data.yrmo)
            }
            /
            {data.yrmo}
          </div>
    </div>




    </div>
    </>
  );
};

export default StepSummary;
