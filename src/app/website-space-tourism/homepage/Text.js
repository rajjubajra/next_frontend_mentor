import {barlowCondensed, bellefair} from '../components/fonts';

function Text() {

  const text = "<p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>"

  return (
    <div>
      <h1 className={bellefair.className}>
      <span className='sm:text-[150px] text-[80px] uppercase'>Space</span>
      </h1>
      {/** text-content */}
      <div className={barlowCondensed.className}>
        <div className='sm:text-[18px] text-[15px] font-thin tracking-widest' dangerouslySetInnerHTML={{__html: text}} />
      </div>
    </div>
  )
}

export default Text
