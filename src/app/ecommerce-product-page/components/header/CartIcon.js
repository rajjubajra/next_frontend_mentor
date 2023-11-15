import Image from 'next/image';

function CartIcon({setViewCart, viewCart}) {

  const showHideCart = () => {
    viewCart ? setViewCart(false) : setViewCart(true);
  }

  return (
    <div className='flex gap-4'>
      <Image 
        onClick = {() => showHideCart()}
        className='w-5 h-5 mt-2 cursor-pointer'
        src="/assets/ecommerce/images/icon-cart.svg" 
        width={50} height={50} 
        alt='cart' />
      <Image 
        className='w-8 h-8'
        src="/assets/ecommerce/images/image-avatar.png" 
        width={50} height={50} 
        alt="avatar" />
    </div>
  )
}

export default CartIcon
