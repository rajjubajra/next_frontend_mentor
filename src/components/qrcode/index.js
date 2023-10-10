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
      <h2 className="font-bold my-4 text-center text-lg tracking-wider">Improve your front-end skills by building projects</h2>
      <div className="text-center font-light">
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </div>
      </div>
    </div>
    </div>
  )
}

export default Qrcode
