import {barlowCondensed, bellefair} from '../components/fonts';

function PageTitle() {
  return (
    <h2 className='sm:text-[28px] text-[16px] uppercase font-thin tracking-widest'>
      <span className={barlowCondensed.className} >So, you want to travel to</span>
    </h2>
  )
}

export default PageTitle
