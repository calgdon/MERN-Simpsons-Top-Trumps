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
    const copyOfPlayerDeck = playerDeck.map((cardInDeck) => cardInDeck)
    copyOfPlayerDeck.push(card)
    setDeck(copyOfPlayerDeck)
  }

  // Delete a single card from a deck

  const deleteCardFromDeck = (card, playerNumber) => {
    let playerDeck = undefined
    let setDeck = undefined
    if (playerNumber === 1) {
      playerDeck = player1Deck
      setDeck = setPlayer1Deck
    } else {
      playerDeck = player2Deck
      setDeck = setPlayer2Deck
    }
    const copyOfPlayerDeck = playerDeck.map((cardInDeck) => cardInDeck)
    const cardIndex = copyOfPlayerDeck.indexOf(card)
    copyOfPlayerDeck.splice(cardIndex, 1)
    setDeck(copyOfPlayerDeck)
  }

  // shuffle main deck

  // const shuffleDeck = () => {
  //   let copyOfCards = cards.map((cardInDeck) => cardInDeck)
  //   let currentIndex = copyOfCards.length,
  //     randomIndex
  //   while (currentIndex != 0) {
  //     randomIndex = Math.floor(Math.random() * currentIndex)
  //     currentIndex--
  //     ;[copyOfCards[currentIndex], copyOfCards[randomIndex]] = [
  //       copyOfCards[randomIndex],
  //       copyOfCards[currentIndex],
  //     ]
  //   }
  //   setCards(copyOfCards)
  // }


  // Shuffle main deck

  const shuffleDeck = () => {
  let copyOfCards = cards.map((cardInDeck) => cardInDeck)
  const shuffledDeck = copyOfCards.sort(() => Math.random() - 0.5)
  setCards(shuffledDeck)
  }
 

  const handleClickAdd = () => {
    addCardToDeck(cards[0], 1)
  }

  const handleClickDelete = () => {
    deleteCardFromDeck(player1Deck[0], 1)
  }

  const handleClickShuffle = () => {
    shuffleDeck()
  }

  // addCardToDeck(cards[0], 1)

  return (
    <>
      <h1>Welcome to TopTrumps</h1>
      <button onClick={handleClickAdd}>TESTING ADD</button>
      <button onClick={handleClickDelete}>TESTING DELETE</button>
      <button onClick={handleClickShuffle}>TESTING SHUFFLE</button>

      <ViewCardsPage cards={cards} />
    </>
  )
}

export default App
