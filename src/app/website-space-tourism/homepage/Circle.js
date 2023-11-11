import {bellefair} from '../components/fonts';

function Circle() {
  return (
    <div className="relative lg:top-32 md:top-40 sm:w-[274px] sm:h-[274px] w-[150px] h-[150px] flex justify-center items-center bg-white text-slate-700 tracking-wider rounded-full uppercase sm:text-[32px] text-[20px]">
      <span className={bellefair.className}>Explore</span>
    </div>
  )
}

export default Circle
