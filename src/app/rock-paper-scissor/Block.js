import Circle from './Circle';

function Block({playgame,item}) {
  
  return (
    <div>
      <div 
        onClick={() => playgame("rock")}
        className={`${item === "rock" ? "flex":"hidden"} justify-center py-5`}>
          <Circle border_colour="border-red-600" icon="icon-rock.svg" />
      </div>
      <div 
        onClick={() => playgame("paper")}
        className={`${item === "paper" ? "flex":"hidden"} justify-center py-5`}>
          <Circle border_colour="border-blue-700" icon="icon-paper.svg" />
      </div>
      <div 
        onClick={() => playgame("scissors")}
        className={`${item === "scissors" ? "flex":"hidden"} justify-center py-5`}>
          <Circle border_colour="border-yellow-500" icon="icon-scissors.svg" />
      </div>
    </div>
  )
}

export default Block
