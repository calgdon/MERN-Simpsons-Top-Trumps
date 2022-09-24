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
    console.log(copyOfPlayerDeck)
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

  // Shuffle main deck

  const shuffleDeck = () => {
  let copyOfCards = cards.map((cardInDeck) => cardInDeck)
  const shuffledDeck = copyOfCards.sort(() => Math.random() - 0.5)
  setCards(shuffledDeck)
  }

  // Deal deck of cards

  const dealDeck = () => {
    let playerAssignment = 0
    let dealerCards = [[],[]]
    cards.forEach((card)=>{
      let playerNumber = (playerAssignment%2)
      dealerCards[playerNumber].push(card)
      playerAssignment += 1
    })
    addCardToDeck(dealerCards[0],1)
    addCardToDeck(dealerCards[1],2)
  }






  // Testing of functions

  const handleClickAdd = () => {
    addCardToDeck(cards[5], 1)
  }

  const handleClickDelete = () => {
    deleteCardFromDeck(player1Deck[0], 1)
  }

  const handleClickShuffle = () => {
    shuffleDeck()
  }

  const handleClickDeal = () => {
    dealDeck()
  }



  // addCardToDeck(cards[0], 1)

  return (
    <>
      <h1>Welcome to TopTrumps</h1>
      <button onClick={handleClickAdd}>TESTING ADD</button>
      <button onClick={handleClickDelete}>TESTING DELETE</button>
      <button onClick={handleClickShuffle}>TESTING SHUFFLE</button>
      <button onClick={handleClickDeal}>TESTING DEAL</button>

      <ViewCardsPage cards={cards} />
    </>
  )
}

export default App
