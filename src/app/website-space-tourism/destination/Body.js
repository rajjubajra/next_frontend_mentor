import { bellefair } from '../components/fonts';

function Body({name,desc}) {
  return (
    <>
      <div className={bellefair.className}>
        <h1 className='sm:text-[100px] text-[56px] uppercase'>{name}</h1>
      </div>
      <div>
        <div className='font-light px-6 md:px-0' dangerouslySetInnerHTML={{__html: desc }} />
      </div>
    </>
  )
}

export default Body
