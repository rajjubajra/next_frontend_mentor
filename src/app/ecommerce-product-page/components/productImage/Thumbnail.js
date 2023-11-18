import Image from 'next/image';
import data from '../../data.json';
import { useDispatch, useSelector } from 'react-redux';
import { setImageIndex } from '../../reduxSlice/imageSlice';


function Thumbnail() {

  //redux toolkit dispath
  const dispatch = useDispatch()
  const imageIndex = useSelector((state) => state.imageIndex.index);
  
  
  return (
    <div className='hidden sm:flex gap-7 px-10 pt-5'>
        {
          data[0].productImage.map((item, i)=> {
            return <div key={i}
            className={`${imageIndex === i ? "border-slate-600 opacity-50" : "border-orange-500"} border cursor-pointer`}
            onClick={() => dispatch(setImageIndex(i))}>
            <Image 
            src={item.thumbnail} 
            width={100} height={100} 
            alt='thumbnail' />
            </div>
          })
        }
    </div>
  )
}

export default Thumbnail
