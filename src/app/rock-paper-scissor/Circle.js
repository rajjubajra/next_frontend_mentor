import Image from "next/image";


function Circle({border_colour, icon}) {
  return (
    <div className={`w-24 h-24 border-8 ${border_colour} 
    shadow-sm hover:shadow-lg duration-300 
    cursor-pointer rounded-full`}>
      <div className="w-full h-full flex justify-center items-center border-4 rounded-full border-gray-700/30 bg-white">
        <Image src={`/assets/images/${icon}`} width={50} height={50} alt="icon" />
      </div>
    </div>
  )
}

export default Circle
