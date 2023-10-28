'use client';
import {useState, useEffect} from 'react';
import Logo from './Logo';
import Link from 'next/link';
import Block from './Block';




function RockPaperScessor() {

  /** Array for choice */
  const array = ["rock", "paper", "scissors"];


  /** Score Board state */
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [tieScore, setTieScore] = useState(0);

  /** Winner state */
  const [winner, setWinner] = useState(false)


  /** Rock, Paper, Scissors, Picked State */
  const [computerChoice, setComputerChoice] = useState('');
  const [playerChoice, setPlayerChoice] = useState('');
  console.log("items:", computerChoice, playerChoice)


  /** Update Score and define Winner function */
  const playgame = (item) => {
    
    var randomItem = array[Math.floor(Math.random()*array.length)];
    setComputerChoice(randomItem);
    setPlayerChoice(item);
    console.log("ITEM", item, randomItem);


  }


  useEffect(()=> {
     /** source: chatgpt */
    if (playerChoice === computerChoice) {
      // It's a tie
        setWinner("No one wins, it's tie")
        setTieScore(tieScore + 1)
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      // Player wins
      setWinner("You win !")
      setPlayerScore(playerScore + 1)
    } else {
      // Computer wins
      setWinner("Computer Win!")
      setComputerScore(computerScore + 1)
    }

  },[computerChoice, playerChoice])


  /** Restart the game */
  const restart = () => {
    setComputerChoice('');
    setPlayerChoice('')
    setWinner('');
  }



  

  return (
    <div className='w-full flex justify-center'>
    <div className='md:w-[600px] w-full md:p-10 bg-sky-900 border text-center'>
    {/** LOGO AND SCORE */}
      <div className='p-3 md:p-0'>
        <div className='md:w-[500px] w-full p-4 border rounded-lg bg-slate-500 flex justify-between'>
          <Logo />
          <div className='w-20 h-20 bg-slate-100 rounded-lg border flex justify-center items-center'>
            <div>
              <div className='text-xs uppercase'>Score</div>
              <div className='text-4xl  font-bold text-center'>{playerScore}</div>
              <div className='text-xs'>House: {computerScore}</div>
            </div>   
          </div>
        </div>
      </div>



      {/** View Picked Item */}
      <div className={`${computerChoice && playerChoice ? "flex":"hidden"} justify-center gap-20 pointer-events-none cursor-not-allowed text-slate-100`}>
        <div>
          <Block item={computerChoice} />
          House picked 
        </div>
        <div>
          <Block item={playerChoice} />
          You picked
        </div>
      </div>



      {/** PLAY GAMING  */}
      <div className='md:w-[500px] w-full grid grid-cols-2 grid-rows-2 p-10'>
        <div className={`${computerChoice === "" && playerChoice === "" ? "flex justify-center": "hidden"}`}>
          <Block playgame={playgame} item="rock" />
        </div>
        <div className={`${computerChoice === "" && playerChoice === "" ? "flex justify-center": "hidden"}`}>
          <Block playgame={playgame} item="paper" />
        </div>


      <div className='col-span-2 flex justify-center md:py-5'>
        {/** hide once player picked a item */}
        <div className={`${computerChoice === "" && playerChoice === "" ? "flex": "hidden"}`}>
          <Block playgame={playgame} item="scissors" />
        </div>
        


        {/** display once player picked a item to allow to game start */}
        <div className={`${computerChoice === "" && playerChoice === "" ? "hidden": "flex"} flex-col  items-center`}>
          <div className='text-2xl font-bold text-slate-100 tracking-widest uppercase py-4'>
            <h3>{winner}</h3>
          </div>
          
          <div 
          onClick={() => restart()}
          className='w-40 h-11 pt-3 bg-slate-200 border rounded-lg text-xs font-light uppercase cursor-pointer'>
          Play Again</div>
          </div>
        </div>
      </div>
      <div className='float-right'>
        <Link 
        className='text-slate-300 text-xs font-light border border-slate-400 px-4 py-1 rounded'
        href="#">Rules</Link>
      </div>
  
    </div>
    </div>
  )
}

export default RockPaperScessor
