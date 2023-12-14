


const data = {
  "id": 1,
  "title": "About our furniture",
  "description": "<p>Our multifunctional collection blends desing and function to suit your individual test. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pice you need, from traditional to conteporary styles or anything in between. Product specialist are available to help you create your dream space.</p>"
}

function BlockTwo() {
  return (
    <div className="flex justify-center items-center lg:h-72">
      <div className="lg:mx-20 mx-6 lg:my-0 my-10">
        <h1 className="uppercase tracking-[0.2em] lg:tracking-[0.6em] font-semibold">{data.title}</h1>
        <div className="my-5" dangerouslySetInnerHTML={{__html: data.description}} />
      </div>    
    </div>
  )
}

export default BlockTwo
