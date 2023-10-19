import React from 'react'

type Props = {
  title:string;
  desc:string;
}

const FormHeading = (props: Props) => {
  return (
    <div className='pt-10 pb-5'>
      <h2 className="font-bold text-3xl">{props.title}</h2>
      <p className="font-thin text-sm">{props.desc}</p>
    </div>
  )
}

export default FormHeading