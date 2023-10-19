

type Props = {}

const FormSummary = () => {
  return (
    <div className="w-full">

      <div className="w-full">
        <div className="w-full flex justify-between bg-slate-100 px-3 py-5 rounded-t-md">
          <div>
            <h3 className="font-bold">Arcade (Yearly)</h3>
            <span className="font-light underline">Change</span>
          </div>
          <div className="font-bold">
            $90/yr
          </div>
        </div>

        <div className="border-t py-5 bg-slate-100 px-3 font-light rounded-b-md">
          <div className="flex justify-between">
            <p>Online Service</p>
            <p>$10/yr</p>
          </div>
          <div className="flex justify-between mt-2">
            <p>Large Storage</p>
            <p>$20/yr</p>
          </div>
        </div>
        

        <div className="flex py-6 px-3 justify-between">
          <p>Total ( per year)</p>
          <p>$120/yr</p> 
        </div>
        
      </div>
      
    </div>
  )
}

export default FormSummary