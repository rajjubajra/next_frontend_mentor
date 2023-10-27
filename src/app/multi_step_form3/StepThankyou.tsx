import IconThanks from './assets/images/icon-thank-you.svg';
import Image from 'next/image';



export const StepThankyou = () => {
  return (
    <div className="w-full md:h-[500px] h-[400px] flex flex-col justify-center items-center">
      <div>
        <Image src={IconThanks} width={70} height={70} alt="Thanks" />
      </div>
      <div className='text-center mt-4 px-10'>
        <h3 className='text-2xl font-bold my-5'>Thank You !</h3>
        <p>Thanks for confirming your subscription ! We hope you have fund using our platform. If you ever need support, please feel free to email us at 
          support@loremgaming.com.</p>
      </div>
      
    </div>
  )
}
