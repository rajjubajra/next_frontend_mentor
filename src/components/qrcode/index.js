'use client';
import { useQRCode } from "next-qrcode";
import Link from "next/link";

function Qrcode() {

  const {Canvas} = useQRCode();
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
    <div className="p-4 bg-slate-300 w-[300px] rounded-xl">
    <div className="w-full bg-blue-500 h-[280px] flex justify-center rounded-xl items-center">
      <Canvas 
        text={'https://github.com/bunlong/next-qrcode'}
        options={{
          errorCorrectionLevel: 'M',
          margin: 0,
          scale: 4,
          width: 160,
          color: {
            dark: '#3B82F6',
            light: '#FFF',
          },
        }}
      />
    </div>
      
      <div className="my-6">
      <h2 className="font-bold my-4 text-center text-lg tracking-wider leading-6">Improve your front-end skills by building projects</h2>
      <div className="text-center font-light leading-5">
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </div>
      </div>
    </div>
    </div>
  )
}

export default Qrcode
