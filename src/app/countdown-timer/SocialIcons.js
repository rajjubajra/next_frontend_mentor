import Image from 'next/image';

function SocialIcons() {
        return (
        <div className='absolute bottom-10 flex gap-4'> 
        <Image 
        className='hover:cursor-pointer'
        src="/assets/countdown_timer/images/icon-facebook.svg" 
                width={15} height={15} alt='icon' />
        <Image 
        className='hover:cursor-pointer'
        src="/assets/countdown_timer/images/icon-pinterest.svg" 
                width={15} height={15} alt='icon' />
        <Image 
        className='hover:cursor-pointer'
        src="/assets/countdown_timer/images/icon-instagram.svg" 
                width={15} height={15} alt='icon' />
        </div>
        )
}

export default SocialIcons
