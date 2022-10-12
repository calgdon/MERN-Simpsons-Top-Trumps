import React from 'react'
import { Link } from 'react-router-dom'
import CardComparisonDetail from '../Components/CardComparisonDetail'
import GameForm from '../Components/GameForm'
import NavBar from '../Components/Navbar'

import PlayerDeck from '../Components/PlayerDeck'
import '../css/Master.css'

const GamePageComputer = ({
  playGameRound,
  player1Card,
  player2Card,
  winner,
  controllingPlayer,
  setupGame,
  player1Score,
  player2Score,
  player1DeckState,
  player2DeckState,
  cardComparison,
  setCardComparison,
  selectedCategory,
  setSelectedCategory,
  gameVsComputer,
}) => {
  const handleRerunSetup = () => {
    setupGame()
  }

  const handleWinningCardModalClick = (e) => {
    e.preventDefault()
    playGameRound(selectedCategory)
    setCardComparison(null)
  }

  const winningCardRender = !cardComparison ? null : (
    <div id='winningCardModal' className='modal'>
      <div id='winningCardFlexContainer'>
        <CardComparisonDetail card={player1Card} />
        <CardComparisonDetail card={player2Card} />
      </div>

      <div className='next-button-container'>
        <button className='next-button' onClick={handleWinningCardModalClick}>
          Next Card
        </button>
      </div>
    </div>
  )

  // line 61 and 66 could just be setupGame()

  const winnerRender = !winner ? null : (
    <div className='modal'>
      <div className='modalText' id='myModal'>
        <h2>WE HAVE A WINNER AND IT IS PLAYER {winner}</h2>
        <h3>
          Player 1 Score: {player1Score} - Player 2 Score: {player2Score}{' '}
        </h3>
        <div className='modalbuttons'>
          <Link to='/'>
            <button className='next-button' onClick={handleRerunSetup}>
              Return Home
            </button>
          </Link>
          <Link to='/play'>
            <button className='next-button' onClick={handleRerunSetup}>
              Play Again
            </button>
          </Link>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <NavBar />
      <div id='gameplayWrapper'>
        <div>
          <PlayerDeck className='player-deck' deck={player1DeckState} />
        </div>

        <div className='gridComponent'>
          <GameForm
            card={player1Card}
            controllingPlayer={controllingPlayer}
            playerNumber={1}
            setSelectedCategory={setSelectedCategory}
            setCardComparison={setCardComparison}
            gameVsComputer={gameVsComputer}
          />
          <GameForm
            card={player2Card}
            controllingPlayer={controllingPlayer}
            playerNumber={2}
            setSelectedCategory={setSelectedCategory}
            setCardComparison={setCardComparison}
            gameVsComputer={gameVsComputer}
          />
        </div>

        <div>
          <PlayerDeck className='player-deck' deck={player2DeckState} />
        </div>
      </div>
      <div>{winnerRender}</div>
      <div>{winningCardRender}</div>
    </>
  )
}

export default GamePageComputer
