

function ScoreLabel({score}) {
  return (
    <div className='md:w-20 w-40 md:mr-5'>
      <div className='md:w-8 text-center border flex  md:justify-center justify-around md:flex-col rounded-lg'>
        <div className="md:mt-0 mt-2 cursor-pointer">+</div>
        <div className='my-2'>{score}</div>
        <div className="md:mt-0 mt-2 cursor-pointer">-</div>
      </div>
    </div>
  )
}

export default ScoreLabel
