'use client'
import {BsMoonStars, BsSun} from 'react-icons/bs';


function Darkmode({mode, setMode}) {


  return (
    <div>
      <button 
      title="change Dark Mode"
      className='relative z-50 p-2 rounded-full right-4'
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
      {mode === 'dark' ? <BsMoonStars /> : <BsSun />}
      </button>
    </div>

  )
}

export default Darkmode