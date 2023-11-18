"use client";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../reduxSlice/cartSlice";
import Image from 'next/image';
import {rateAfterDiscount} from '../../functions/rateAfterDiscount';

function ProductDetails({data}) {

  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch();

  console.log(count)


  return (
    <div className='my-2 sm:p-12'>

      <div
      className="uppercase my-4 text-xs text-orange-400 font-medium">
      {data.brand}
      </div>

      <h2 className="text-2xl font-medium my-2">{data.title}</h2>

      <div className='my-6'>
        <div className='text-sm' dangerouslySetInnerHTML={{__html: data.desc}} />
      </div>
      

      {/** Rate and Discounted Amount */}
      <div className="grid grid-cols-2 sm:grid-cols-1 my-2">
        <div>
          <span className="text-2xl font-bold mr-4">
          ${rateAfterDiscount(data.discount_percent, data.rate)}
          </span>
          <span className="relative -top-1 text-orange-400 text-sm px-2 py-1 bg-orange-200 font-bold">
          {data.discount_percent}%</span> 
        </div>
        <div className="font-medium line-through text-slate-400 mt-1 
        sm:text-left text-right">${data.rate}</div>
      </div>


    {/** Add to Cart Section */}
      <div className='sm:flex'>

        {/** Add and Substract Button */}
        <div className='flex justify-around font-bold 
        py-5 my-4 bg-slate-300/50
        sm:w-[40%]'>
          <div 
          onClick={() => dispatch(decrement())}
          className='text-orange-500 cursor-pointer'>-</div>
          <div>{count}</div>
          <div
          onClick={() => dispatch(increment())}
          className='text-orange-500 cursor-pointer'>+</div>
        </div>

        {/** Add to Card Button */}
        <div className='flex justify-center items-center h-16 
        w-full bg-orange-500 sm:ml-5 mt-4'>
          <div 
          onClick={() => dispatch(increment())}
          className='flex cursor-pointer'>
          <span>
          <Image 
          className='mt-0.5'
          src="/assets/ecommerce/images/icon-cart.svg" 
          width={18} height={18} alt='cart-icon' />
          </span>
          <span 
          className='text-slate-200 ml-2'>Add to cart</span>
          </div>
        </div>
      
      </div>
      

    </div>
  )
}

export default ProductDetails
