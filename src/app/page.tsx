import Link from 'next/link';



export default function Home() {
  return (
    <main className="w-full flex my-10 md:px-10">
      <Link href="/qrcode">Qr Code App</Link>
      <Link href="/multi_step_form">Multi Step Form</Link>
    </main>
  )
}
