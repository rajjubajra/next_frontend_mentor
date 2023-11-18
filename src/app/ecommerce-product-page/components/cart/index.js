import { useSelector, useDispatch } from "react-redux";
import data from '../../data.json';
import Image from 'next/image';
import { rateAfterDiscount } from "../../functions/rateAfterDiscount";
import {removeItem} from '../../reduxSlice/cartSlice';



function Cart() {

  const count = useSelector((state) => state.counter.value); 
  const dispatch = useDispatch();

  console.log("Cart Item: ", count)
  return (
    <div className='w-80 min-h-[200px] bg-slate-100'>
      
      <h2 className="w-full py-2 border-b pl-5">Cart:  {count}</h2>
      <div className="w-full">
      {
        count === 0 
        ? <div className="text-center w-full my-10">Your Cart is empty</div>
        : <div className="text-center w-full text-3xl mt-10">
        <div>
        {/** PROCUT LINE */}
          <div className="flex px-2">
          <div className="p-1">
            <Image src={data[0].productImage[0].thumbnail} 
            width={30} height={30} alt="product thumbnail" />
          </div>
          <div className="px-2 mx-2">
            <div className="text-sm">{data[0].title}</div>
            <div className="text-xs w-full text-left">
            <span>
              ${rateAfterDiscount(data[0].rate, data[0].discount_percent)} x {count} =
            </span>
            <span className="mx-2 font-bold">
              ${rateAfterDiscount(data[0].rate, data[0].discount_percent) * count}
            </span>
            </div>
          </div>
          <div 
          onClick={() => dispatch(removeItem())}
          className="p-2 ml-2 w-10 h-10 flex justify-center items-center cursor-pointer border">
            <Image src="/assets/ecommerce/images/icon-delete.svg" width={10} height={10} alt="delet icon" />
          </div>  
          </div>
          
        {/** CHECKOUT BUTTON */}
          <div className="flex justify-center mt-4 cursor-pointer">
            <div className="py-2 w-52 bg-orange-400 text-sm">Checkout</div>
          </div>
        </div>
        </div>

      }
        
      </div>
    </div>
  )
}

export default Cart
