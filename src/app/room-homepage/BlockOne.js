import AngleArrowLeft from './AngleArrowLeft';
import AngleArrowRight from './AngleArrowRight';
import ButtonArrow from './ButtonArrow';

function BlockOne({data, state}) {
  return (
    <>
      <div className='xl:p-20 p-7'>
        <h1 className='lg:text-5xl text-3xl font-semibold tracking-tighter'>
        {data[state].title}
        </h1>
        <div className='text-sm text-slate-500 my-4  lg:my-5' dangerouslySetInnerHTML={ {__html: data[state].text}} />
          <ButtonArrow  data={data} />
      </div>
    </>
      
  )
}

export default BlockOne
