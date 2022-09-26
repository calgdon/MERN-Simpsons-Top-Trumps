import React from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import CardDetail from '../components/CardDetail'
import GameForm from '../components/GameForm'
import TopTrumpsService from '../services/TopTrumpsService'
import "./gamepage.css"

const GamePage = ({
  cards,
  playGameRound,
  player1Card,
  player2Card,
  winner,
  controllingPlayer,
  setWinner,
  setupGame
}) => {
  const playerCard = controllingPlayer == 1 ? player1Card : player2Card

  const handleRerunSetup =() => {
    setupGame()
  }



  const winnerRender = () => {
    if (!winner) {
      return
    } else {
      return (
        <div class='popup'>
          <span className='popuptext' id='myPopup'>
            <h2>WE HAVE A WINNER and it's player {winner}</h2>
            <Link to='/'>
              <button onClick={handleRerunSetup}>Return Home</button>
            </Link>
            <Link to='/play'>
              <button onClick={handleRerunSetup}>Play Again</button>
            </Link>
          </span>
        </div>
      )
    }
  }

  const handleWinnerClick = () => {
    setWinner(1)
  }





  return (
    <>
      <div>GamePage</div>
      <div>{winnerRender()}</div>
      <GameForm
        card={playerCard}
        playGameRound={playGameRound}
        controllingPlayer={controllingPlayer}
      />
      <button onClick={handleWinnerClick}>Button</button>
    </>
  )
}

export default GamePage
