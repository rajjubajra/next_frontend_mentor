import { useSelector } from "react-redux/es/hooks/useSelector";
import {selectCartItem} from '../../../../redux/cartSlice';

function Cart() {

  const cartItems = useSelector(selectCartItem);

  console.log("Cart Item: ", cartItems)
  return (
    <div className='w-80 min-h-[200px] bg-slate-100'>
      
      <h2 className="w-full py-2 border-b pl-5">Cart</h2>
      <div className="w-full">
        <div className="text-center w-full my-10">Your Cart is empty</div>
      </div>
    </div>
  )
}

export default Cart
