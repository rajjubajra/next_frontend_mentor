import Image from 'next/image';

function ReplyButton() {
  return (
    <div className='flex text-sm mt-4 order-last cursor-pointer'>
      <Image 
        className='w-4 h-3 mt-1 mr-1.5'
        src="/assets/images/icon-reply.svg" width={10} height={10} alt='reply icon' />
      <span>Reply</span>
    </div>
  )
}

export default ReplyButton
