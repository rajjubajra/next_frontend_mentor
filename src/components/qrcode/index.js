'use client';
import { useQRCode } from "next-qrcode";
import Link from "next/link";

function Qrcode() {

  const {Canvas} = useQRCode();
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
    <div className="p-4 bg-slate-300 w-80 rounded-xl">
    <div className="w-full bg-blue-500 h-80 flex justify-center rounded-xl items-center">
      <Canvas 
        text={'https://github.com/bunlong/next-qrcode'}
        options={{
          errorCorrectionLevel: 'M',
          margin: 1,
          scale: 4,
          width: 170,
          color: {
            dark: '#3B82F6',
            light: '#FFF',
          },
        }}
      />
    </div>
      
      <div className="my-6">
      <h2 className="font-bold my-4 text-center text-xl">Improve your front-end skills by building projects</h2>
      <div className="text-center font-light">
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </div>
      </div>
    </div>

    <div className="mt-10 w-full text-center">
        <Link 
        className="hover:shadow-md border px-4 py-2 font-ligh text-xs uppercase"
        href="https://github.com/rajjubajra/next_frontend_mentor/blob/main/src/components/qrcode/index.js">Code</Link>
    </div>
    </div>
  )
}

export default Qrcode
