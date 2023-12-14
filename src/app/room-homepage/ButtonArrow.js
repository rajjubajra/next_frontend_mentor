

function ButtonArrow({data}) {
  return (
    <button className='flex gap-4 lg:tracking-[1em] tracking-[0.4em] uppercase text-sm group hover:text-slate-500 hover:cursor-pointer'>
            {data[0].button} 
            
            <svg className="mt-1 group-hover:fill-slate-500 fill-slate-900" width="40" height="12" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill-rule="nonzero"/></svg>
            
    </button>
  )
}

export default ButtonArrow
