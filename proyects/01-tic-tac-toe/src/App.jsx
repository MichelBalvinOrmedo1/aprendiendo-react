import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O:  'o'
}


const Square = ({children, isSelected ,updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''} `

  const handsClick = () => {
    updateBoard(index)
  }


  return (
    <div  onClick={handsClick} className={className}>
      {children}
    </div>
  )
}

function App(){

  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = (index) =>{
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn)
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <secction className="game">
        {
          board.map((_,index) => {
            return (
              <div className="cell" key={index}>
                <span className="cell_content">
                  <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                  >
                    {board[index]}
                  </Square>
                </span>
              </div>
            )
          })
        }
      </secction>
      <section className="turn">
        <Square isSelected = {turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected = { turn == TURNS.O}>{TURNS.O}</Square>

      </section>
    </main>
  )

}
export default App