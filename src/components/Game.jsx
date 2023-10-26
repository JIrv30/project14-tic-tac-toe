import { useState } from "react"
import Board from "./Board"
import Helpers from "../helpers"

const styles = {
  width: '200px',
  margin: '20px auto',
}

export default function Game () {
  const [history, setHistory] = 
  useState([Array(9).fill(null)])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXIsNext] = useState(true)
  const winner = Helpers(history[stepNumber])
  
  function handleClick (i) {
    const timeInHistory = history.slice(0, stepNumber+1)
    const current = timeInHistory[stepNumber]
    const squares = [...current]

    //if user click ocupied sqre or ifgame iswon return
    if(winner || squares[i]) return
    // put an x or an o in the clicked squre
    squares[i] = xIsNext ? 'X' : 'O'
    setHistory([...timeInHistory, squares])
    setStepNumber(timeInHistory.length)
    setXIsNext(!xIsNext)
  }

  function jumpTo (step) {
    setStepNumber(step)
    setXIsNext(step % 2===0)
  }

  function renderMoves () {
    history.map((_step,move)=>{
      const destination = move ? `Go to move ${move}` : 'Go to start'
      return (
        <li key={move}>
          <button
          onClick={()=>jumpTo(move)}>
            {destination}
          </button>
        </li>
      )
    })
    
  }

  return (
    <>
      <Board
      squares={history[stepNumber]}
      onClick={handleClick} />
      <div style={styles}>
        <p>{winner ? 'Winner:' + winner : 'Next Player:' + (xIsNext ? 'X': 'O')}</p>
        {renderMoves()}
      </div>
    </>
  )
}