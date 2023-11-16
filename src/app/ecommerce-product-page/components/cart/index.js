import { useSelector } from "react-redux/es/hooks/useSelector";


function Cart() {

  const count = useSelector((state) => state.counter.value); 

  console.log("Cart Item: ", count)
  return (
    <div className='w-80 min-h-[200px] bg-slate-100'>
      
      <h2 className="w-full py-2 border-b pl-5">Cart:  {count}</h2>
      <div className="w-full">
      {
        count === 0 
        ? <div className="text-center w-full my-10">Your Cart is empty</div>
        : <div className="text-center w-full text-3xl mt-10">{count}</div>

      }
        
      </div>
    </div>
  )
}

export default Cart
