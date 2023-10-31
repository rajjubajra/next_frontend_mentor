import {barlowCondensed, bellefair} from './components/fonts';

function SpaceTourism() {
  return (
    <div className="w-full md:grid md:grid-cols-2 min-h-screen relative -top-24 z-0
    md:bg-[url('/assets/space_tourism/assets/home/background-home-desktop.jpg')]
    sm:bg-[url('/assets/space_tourism/assets/home/background-home-tablet.jpg')]
    bg-cover
    ">
    
    {/** left block */}
    <div className="w-full h-screen flex justify-center items-center text-white">
      <div className='w-[450px] h-[382px] relative top-28'>
      <h2 className='text-[28px] uppercase font-thin tracking-widest'>
      <span className={barlowCondensed.className} >So, you want to travel to</span>
      </h2>
      <h1 className={bellefair.className}>
      <span className='text-[150px] uppercase'>Space</span>
      </h1>
      <div className={barlowCondensed.className}>
        <p className='text-[18px] font-thin tracking-widest'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
      </div>
      </div>
    </div>
    {/** right block */}
    <div className="w-full h-screen flex justify-center items-center">
      <div className="relative top-32 w-[274px] h-[274px] flex justify-center items-center bg-white text-slate-700 tracking-wider rounded-full uppercase text-[32px]">
      <span className={bellefair.className}>Explore</span>
      </div>
    </div>
      
    </div>
  )
}

export default SpaceTourism