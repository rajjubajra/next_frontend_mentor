import { bellefair } from '../components/fonts';

function DistanceTravel({dist, trvTime}) {
  return (
    <>
    <div>
        <p className='text-xs uppercase'>Avg. distance</p>
        <p className='sm:text-2xl text-[28px] uppercase font-light'>
          <span className={bellefair.className}>{dist}</span>
        </p>
    </div>
    <div>
        <p className='text-xs uppercase'>Est. Travel Time</p>
        <p className='text-2xl uppercase text-[28px]'>
        <span className={bellefair.className}>{trvTime}</span>
        </p> 
    </div>
    </>
  )
}

export default DistanceTravel
