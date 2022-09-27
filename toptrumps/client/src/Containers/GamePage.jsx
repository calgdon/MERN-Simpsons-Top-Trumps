import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CardDetail from '../components/CardDetail'
import GameForm from '../components/GameForm'
import TopTrumpsService from '../services/TopTrumpsService'
import toptrumpback from '../images/toptrumpback.jpeg'

import '../css/gamepage.css'
import PlayerDeck from '../components/PlayerDeck'

const GamePage = ({
  playGameRound,
  player1Card,
  player2Card,
  winner,
  controllingPlayer,
  setupGame,
  player1Score,
  player2Score,
  player1DeckState,
  player2DeckState
}) => {

  const handleRerunSetup = () => {
    setupGame()
  }

  const handleGameplayClick = (e)=>{
    e.preventDefault();
    playGameRound(e.target.value)
  }

  const winnerRender = () => {
    if (!winner) {
      return
    } else {
      return (
        <div class='modal' data-keyboard='false' data-backdrop='static'>
          <div className='modalText' id='myModal'>
            <h2>WE HAVE A WINNER AND IT IS PLAYER {winner}</h2>
            <h3>
              Player 1 Score: {player1Score} - Player 2 Score: {player2Score}{' '}
            </h3>
            <div className='modalbuttons'>
              <Link to='/'>
                <button className='modalbutton' onClick={handleRerunSetup}>
                  Return Home
                </button>
              </Link>
              <Link to='/play'>
                <button className='modalbutton' onClick={handleRerunSetup}>
                  Play Again
                </button>
              </Link>
            </div>
          </div>
        </div>
      )
    }
  }




  return (
    <>
    <div id='gameplayWrapper'>
      <div><PlayerDeck deck={player1DeckState}/></div>
      <div className='gridComponent'>
        <GameForm
          card={player1Card}
          controllingPlayer={controllingPlayer}
          playerNumber={1}
          handleClick={handleGameplayClick}
        />
        <GameForm
          card={player2Card}
          controllingPlayer={controllingPlayer}
          playerNumber={2}
          handleClick={handleGameplayClick}

        />
      </div>
      <div>
      
      <PlayerDeck deck={player2DeckState}/>
      
      </div>
    </div>
    <div>{winnerRender()}</div>
    </>
  )
}

export default GamePage
