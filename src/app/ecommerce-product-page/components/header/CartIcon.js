import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { cartViewState } from '../../reduxSlice/cartSlice';

function CartIcon() {

  const count = useSelector((state) => state.counter.value); 
  const dispatch = useDispatch();


  return (
    <div className='flex gap-4 relative'>
    {/** Product Quantity on top of Cart Icon */}
      <div className=' text-xs absolute left-1.5 -top-1  rounded-full'>
      { count !== 0 && 
      <div className='w-3 h-3 flex justify-center items-center rounded-full bg-orange-400'>{count}</div>
      }
      </div>

    {/** CART ICON */}
      <Image 
        onClick = {() => dispatch(cartViewState())}
        className='w-5 h-5 mt-2 cursor-pointer'
        src="/assets/ecommerce/images/icon-cart.svg" 
        width={50} height={50} 
        alt='cart' />

    {/** AVATAR OF A CLIENT */}
      <Image 
        className='w-8 h-8'
        src="/assets/ecommerce/images/image-avatar.png" 
        width={50} height={50} 
        alt="avatar" />
    </div>
  )
}

export default CartIcon