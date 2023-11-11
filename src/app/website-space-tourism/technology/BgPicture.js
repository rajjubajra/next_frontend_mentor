


function BgPicture({data, state}) {

  const url = "/assets/space_tourism" + data.images.landscape.slice(1);
  console.log("Picture", data, state, data.images.landscape.slice(1));
  //bg-[url('/assets/space_tourism/assets/technology/image-launch-vehicle-landscape.jpg')]
  return (
    <div 
    style={{ backgroundImage: 'url(' + url + ')'}}
    className="bg-cover bg-no-repeat bg-center lg:w-[515px] lg:h-[527px] sm:h-[310px] h-[170px] w-full">
    </div>
  )
}

export default BgPicture
