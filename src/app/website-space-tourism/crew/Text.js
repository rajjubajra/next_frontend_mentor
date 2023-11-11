import { bellefair } from '../components/fonts';

function Text({crewInfo}) {
  return (
    <div className='order-2 md:order-1 lg:text-left text-center '>
      <div className='uppercase md:text-[32px] text-[16px]  text-slate-400 font-thin lg:mt-20'>
        <span className={bellefair.className}>{crewInfo?.role}</span>
      </div>
      <div className='md:text-[40px] text-[24px] uppercase font-thin'>
        <span className={bellefair.className}>{crewInfo?.name}</span>
      </div>
      <div className='lg:mt-10 text-[18px] text-slate-400'>{crewInfo?.bio}</div>
    </div>
  )
}

export default Text
