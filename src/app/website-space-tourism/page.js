import PageTitle from './homepage/PageTitle';
import Text from './homepage/Text';
import Circle from './homepage/Circle';

function SpaceTourism() {
  return (
    <div className="w-full  lg:grid lg:grid-cols-2 md:grid-cols-1 min-h-screen relative lg:-top-24 z-0
    lg:bg-[url('/assets/space_tourism/assets/home/background-home-desktop.jpg')]
    md:bg-[url('/assets/space_tourism/assets/home/background-home-tablet.jpg')]
    bg-[url('/assets/space_tourism/assets/home/background-home-mobile.jpg')]
    bg-cover">
    
    {/** left block */}
    <div className="w-full lg:h-screen flex justify-center items-center text-white">
      
      <div className='sm:w-[450px] w-[327px] h-[382px] 
      relative md:top-28 top-16 sm:px-0 px-4 text-center md:text-left'>
          {/** title */}
          <PageTitle />

          {/** SPACE : letter */}
          <Text />
      </div>

    </div>


    {/** right block */}
    <div className="w-full lg:h-screen flex justify-center items-center">
      <Circle />
    </div>
      
    </div>
  )
}

export default SpaceTourism