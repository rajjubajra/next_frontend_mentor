'use client';
import {useState} from 'react';
import FormHeading from './FormHeading';
import plandata from './data_plan.json';
import addOnsData from './data_addons.json';




type props = {
  data: Array<React.FC[]>,
}


export const StepSummary = ({data}: props) => {


  console.log("plandata?? : ",plandata);


  const getRate = (planId:string, billing:string) => {
    const index = plandata.findIndex(item => item.planId === planId)
    const amt = billing === "Yearly" ? plandata[index].rate * 12 : plandata[index].rate;
    return amt;
  }


  const addonsArr = (addOn:string, billing:string) => {
    const index = addOnsData.findIndex( a => a.addOnsId === addOn)
  
    return  <div className="my-2" >
              <div className='w-full flex justify-between'>
                <div>{addOn}</div>
                <div>
                {
                  billing === 'Yearly'
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

      data.addOns.forEach(addOn => {
        const matchingAddOn = addOnsData.find(data => data.addOnsId === addOn);
        if (matchingAddOn) {
          sumMonthly += matchingAddOn.rate_monthly;
          sumYearly += matchingAddOn.rate_yearly;
        }
      });
      
      console.log('Sum of rate_monthly:', sumMonthly);
      console.log('Sum of rate_yearly:', sumYearly);
      return billing === "Yearly" ? sumYearly : sumMonthly;

  }

  /** BILLING PERIOD - "yr" or "mo" */
  const billingPeriod = (moyr:string) => {
    return moyr === "Yearly" ? "yr" : "mo"
  }

  console.log("Summary data",data);
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

      <div className="w-full">

        {/** Plan-Option Summary */}
        <div className="w-full flex justify-between bg-slate-100 px-3 py-5 rounded-t-md">
          <div>
            <h3 className="font-bold">{`${data.planOption}(${data.billingOption})`}</h3>
            <span 
            className="font-light underline cursor-pointer"
            >Change</span>
          </div>
          <div className="font-bold">
            $ {getRate(data.planOption, data.billingOption)}/{billingPeriod(data.billingOption)}
          </div>
        </div>




        {/** AddOns Summary */}
        <div className="border-t py-5 bg-slate-100 px-3 font-light rounded-b-md">
          {
            data.addOns.map((item:string)=> addonsArr(item, data.billingOption))
          }
        </div>


        {/** Total Amount */}
        <div className="mt-10 w-full flex justify-between">
          <div>Total ({data.billingOption === "Yearly" ? "Per year" : "Per month"})</div>
          <div>
            +$ {
              getRate(data.planOption, data.billingOption) 
              +
              addonsTotal(data.billingOption)
            }
            /
            {billingPeriod(data.billingOption)}

          </div>

        </div>
        

        
        
      </div>
      
    </div>
    </div>
  </>  
  )
}

