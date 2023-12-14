

function AngleArrowLeft({state, setState, data}) {

  console.log("state", state, data.length);

  const goNext = () => {
    state === 0  ? setState(state) : setState(state - 1);
  }


  return (
    <button 
    onClick={() => goNext()}
    className="bg-slate-900 hover:bg-slate-700 w-16 h-16 flex justify-center items-center">
    <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
    </button>
  )
}

export default AngleArrowLeft
