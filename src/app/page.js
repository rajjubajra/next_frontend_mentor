import Link from 'next/link';



export default function Home() {
  return (
    <main className='flex flex-wrap text-xs uppercase'>
      <Link href="/qrcode">Qr Code<br />App</Link>
      <Link href="/multi_step_form">Multi Step<br />Form</Link>
      <Link href="/countries_api" >REST <br />Countries<br /> Api</Link>
      <Link href="/rock-paper-scissor" >Rock Paper<br />Scissor</Link>
      <Link href="/interactive-comments" >Interactive<br />Comments</Link>
      <Link href="/website-space-tourism" >Website<br />Space Tourism</Link>
    </main>
  )
}
