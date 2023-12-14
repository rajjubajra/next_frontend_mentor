import React from 'react'

function InputField({IPAddress, setIPAddress}) {
  return (
    <div className='flex'>
    <input 
        className='h-10 border w-96 outline-none px-3'
        type="text" name="ip_address" 
        value={IPAddress} placeholder="192.212.174.101"
        onChange={(e) => setIPAddress(e.target.value)} /> 
    <button className='bg-slate-500 w-10 h-10 flex justify-center items-center relative border border-slate-500'>
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg>
    </button>
    </div>
  )
}

export default InputField
