import { bellefair } from "../components/fonts";

function Text({data}) {
  return (
    <div className='lg:w-[570px] lg:h-[330px] md:w-[458px] md:h-[237px] text-center lg:text-left px-6 lg:pr-20 '>
        <h3 className="uppercase font-thin text-[16px] lg:mb-3">The terminology...</h3>
        <div className="uppercase text-xl md:text-4xl lg:text-5xl tracking-wide mb-10">
          <span className={bellefair.className}>
          {data.name}
          </span>
        </div>
        <div className="text-[18px] font-thin">{data.description}</div>
    </div>
  )
}

export default Text