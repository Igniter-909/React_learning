import { useState } from "react";
import Card from '../Card/Card'
import './Grid.css'
import isWinner from '../../helper/CheckWinner.js'

function Grid({numberOfCards}){
    const [board,setboard] = useState(Array(numberOfCards).fill(""));
    const [turn,setTurn] = useState(true); //true? 0:X
    const [Winner,setWinner] = useState(null);

    function play(index){
        if(turn==true){
            board[index] = 'O';
        }
        else{
            board[index] = 'X';
        }
        const win = isWinner(board,turn? 'O' : 'X');
        if(win){
            setWinner(win)
        }
        setboard([...board]);
        setTurn(!turn)
    }
    function reset(){
        setTurn(true);
        setWinner(null);
        setboard(Array(numberOfCards).fill(""));
    }

    return(

        <div className="grid-wrapper">
            {
                Winner && (
                    <>
                        <h1 className="turn-highlight">Winner is {Winner}</h1>
                        <button className="reset" onClick={reset}>Reset Game</button>
                    </>
                )
            }

            <h1 className="turn-highlight">Current Turn : {(turn)? 'O' : 'X'}</h1>
            <div className="grid">
                {board.map((el,idx) => <Card key={idx} gameEnd={Winner? true : false} onPlay={play} index={idx} player={el} />)}
            </div>
        </div>
        
    )

}
export default Grid;