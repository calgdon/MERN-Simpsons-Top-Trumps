import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import ViewCardsPage from './containers/ViewCardsPage'
import TopTrumpsService from './services/TopTrumpsService'

function App() {
  const [cards, setCards] = useState([])
  const [player1Deck, setPlayer1Deck] = useState([])
  const [player2Deck, setPlayer2Deck] = useState([])

  useEffect(() => {
    TopTrumpsService.getTopTrumps().then((cards) => setCards(cards))
  }, [])

  // add a single card to a players deck. Have to pass in actual player Number

  const addCardToDeck = (card, playerNumber) => {
    let playerDeck = undefined
    let setDeck = undefined
    if (playerNumber === 1) {
      playerDeck = player1Deck
      setDeck = setPlayer1Deck
    } else {
      playerDeck = player2Deck
      setDeck = setPlayer2Deck
    }
    const copyOfPlayerDeck = playerDeck.map((card) => card)
    copyOfPlayerDeck.push(card)
    setDeck(copyOfPlayerDeck)
  }


  const handleClick = () => {
    addCardToDeck(cards[0], 1)
  }

  // addCardToDeck(cards[0], 1)

  return (
    <>
      <h1>Welcome to TopTrumps</h1>
      <button onClick={handleClick}>TESTING</button>

      <ViewCardsPage cards={cards} />
    </>
  )
}

export default App
