import React from 'react'

function AngleArrowRight({state, setState, data}) {

  const goNext = () => {
    data.length - 1 === state  ? setState(state) : setState(state + 1);
  }

  return (
    <button 
    onClick={() => goNext()}
    className="bg-slate-900 hover:bg-slate-700 w-16 h-16 flex justify-center items-center">
      <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
    </button>
  )
}

export default AngleArrowRight
