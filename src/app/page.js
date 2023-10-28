import Link from 'next/link';



export default function Home() {
  return (
    <main className='flex flex-wrap'>
      <Link href="/qrcode">Qr Code App</Link>
      <Link href="/multi_step_form">Multi Step Form</Link>
      <Link href="/countries_api" >Countries Api</Link>
    </main>
  )
}
