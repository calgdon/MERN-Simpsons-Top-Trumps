import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import ErrorPage from './containers/ErrorPage';
import GamePageComputer from './containers/GamePageComputer';
import Rules from "./containers/Rules";
import Title from "./containers/Title";
import ViewCardsPage from "./containers/ViewCardsPage";
import "./css/Master.css";
import TopTrumpsService from "./services/TopTrumpsService";


function App() {
  // variable setup
  const [cards, setCards] = useState([])
  const [player1DeckState, setPlayer1DeckState] = useState()
  const [player2DeckState, setPlayer2DeckState] = useState()
  const [controllingPlayer, setControllingPlayer] = useState(1)
  const [player1Card, setPlayer1Card] = useState()
  const [player2Card, setPlayer2Card] = useState()
  const [winner, setWinner] = useState(null)
  const [player1Score, setPlayer1Score] = useState(0)
  const [player2Score, setPlayer2Score] = useState(0)
  const [cardComparison, setCardComparison] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState()
  const [gameVsComputer, setGameVsComputer] = useState(false)

  useEffect(() => {
    TopTrumpsService.getTopTrumps().then((cards) => setCards(cards))
  }, [])

  useEffect(() => {
    setupGame()
  }, [cards])

  // // add an array of cards to a players deck without clearing existing cards. Have to pass in actual player Number

  // const addCardToDeck = (cards, playerNumber) => {
  //   let playerDeck = undefined;
  //   let setDeck = undefined;
  //   if (playerNumber === 1) {
  //     playerDeck = player1Deck;
  //     setDeck = setPlayer1Deck;
  //   } else {
  //     playerDeck = player2Deck;
  //     setDeck = setPlayer2Deck;
  //   }
  //   if (!playerDeck) {
  //     setDeck(cards);
  //   } else {
  //     const copyOfPlayerDeck = playerDeck.map((cardInDeck) => cardInDeck);
  //     cards.forEach((card) => {
  //       copyOfPlayerDeck.push(card);
  //     });
  //     setDeck(copyOfPlayerDeck);
  //   }
  // };
  // add an array of cards to a players deck clearing existing cards. Have to pass in actual player Number

  // const addCardsToDeck = (cards, playerNumber) => {
  //   let playerDeck = undefined;
  //   if (playerNumber === 1) {
  //     playerDeck = player1Deck;
  //   } else {
  //     playerDeck = player2Deck;
  //   }
  //   if (!playerDeck) {
  //     playerDeck.push(cards);
  //   } else {
  //     const copyOfPlayerDeck = [];
  //     cards.forEach((card) => {
  //       copyOfPlayerDeck.push(card);
  //     });
  //     playerDeck = copyOfPlayerDeck.map(c=>c);
  //   }
  // };

  // Delete a single card from a deck

  const deleteCardFromDeck = (deck, playerNumber) => {
    const copyOfPlayerDeck = deck.map((cardInDeck) => cardInDeck)
    copyOfPlayerDeck.splice(0, 1)
    if (playerNumber === 1) {
      setPlayer1DeckState(copyOfPlayerDeck)
    } else {
      setPlayer2DeckState(copyOfPlayerDeck)
    }
  }

  // Shuffle main deck

  // const shuffleDeck = () => {
  //   let copyOfCards = cards.map((cardInDeck) => cardInDeck);
  //   const shuffledDeck = copyOfCards.sort(() => Math.random() - 0.5);
  //   setCards(shuffledDeck);
  // };

  // Deal deck of cards

  // const dealDeck = () => {
  //   let playerAssignment = 0;
  //   let dealerCards = [[], []];
  //   cards.forEach((card) => {
  //     let playerNumber = playerAssignment % 2;
  //     dealerCards[playerNumber].push(card);
  //     playerAssignment += 1;
  //   });
  //   addCardsToDeck(dealerCards[0], 1);
  //   addCardsToDeck(dealerCards[1], 2);
  // };

  // GAME MECHANICS

  // assign selected cards

  const selectCards = (player1Deck, player2Deck) => {
    setPlayer1Card(player1Deck[0])
    console.log(player1Deck)
    deleteCardFromDeck(player1Deck, 1)
    setPlayer2Card(player2Deck[0])
    deleteCardFromDeck(player2Deck, 2)
    console.log(player2Deck)
  }

  // Comparison function

  // const decideWinner=(attribute) =>{
  //     if (controllingPlayer == 1) {
  //       if (player1Card[attribute] > player2Card[attribute]) {
  //         addCardToDeck([player1Card, player2Card], 1);
  //         return 1
  //       } else {
  //         addCardToDeck([player1Card, player2Card], 2), setControllingPlayer(2);
  //         return 2
  //       }
  //     }
  //     if (controllingPlayer == 2) {
  //       if (player2Card[attribute] > player1Card[attribute]) {
  //         addCardToDeck([player2Card, player1Card], 2);
  //         return 2
  //       } else {
  //         addCardToDeck([player2Card, player1Card], 1), setControllingPlayer(1);
  //         return 1
  //       }
  //     }
  //   };

  // this is what happens when you click start game

  //   const gameplaySetup = () => {
  //     shuffleDeck();
  //   };

  // async function gameplayLoop  (attribute) {
  //     const result = await decideWinner(attribute);
  //     console.log(result)
  //     if (player1Deck.length === cards.length) {
  //       setWinner(1);
  //     } else if (player2Deck.length === cards.length) {
  //       setWinner(2);
  //     } else {
  //       selectCards();
  //     }
  //   };

  // automatically deal new hand when the master deck is shuffled

  // useEffect(() => {
  //   dealDeck();
  // }, [cards]);

  // New Integrated Functions

  const setupGame = () => {
    let copyOfCards = cards.map((cardInDeck) => cardInDeck)
    const shuffledDeck = copyOfCards.sort(() => Math.random() - 0.5)
    let playerAssignment = 0
    let dealerCards = [[], []]
    shuffledDeck.forEach((card) => {
      let playerNumber = playerAssignment % 2
      dealerCards[playerNumber].push(card)
      playerAssignment += 1
    })
    console.log(shuffledDeck)
    const player1Deck = [...dealerCards[0]]
    const player2Deck = [...dealerCards[1]]
    console.log(player1Deck)
    console.log(player2Deck)
    selectCards(player1Deck, player2Deck)
    setWinner(null)
  }

  const playGameRound = (attribute) => {
    const player1Deck = player1DeckState.map((card) => card)
    const player2Deck = player2DeckState.map((card) => card)
    if (controllingPlayer === 1) {
      if (player1Card[attribute] > player2Card[attribute]) {
        player1Deck.push(...[player1Card, player2Card])
      } else {
        // eslint-disable-next-line no-unused-expressions, no-sequences
        player2Deck.push(...[player1Card, player2Card]), setControllingPlayer(2)
      }
    }
    if (controllingPlayer === 2) {
      if (player2Card[attribute] > player1Card[attribute]) {
        player2Deck.push(...[player2Card, player1Card])
      } else {
        // eslint-disable-next-line no-unused-expressions, no-sequences
        player1Deck.push(...[player2Card, player1Card]), setControllingPlayer(1)
      }
    }
    if (player1Deck.length === 0) {
      setPlayer2Score(player2Score + 1)
      return setWinner(2)
    } else if (player2Deck.length === 0) {
      setPlayer1Score(player1Score + 1)
      return setWinner(1)
    } else {
      selectCards(player1Deck, player2Deck)
    }
  }

  // const handleClickAdd = () => {
  //   addCardToDeck(cards[1], 1);
  //   addCardToDeck(cards[3], 2);
  // };

  // const handleClickDelete = () => {
  //   deleteCardFromDeck(1)
  //   deleteCardFromDeck(2)
  // };

  // const handleClickShuffle = () => {
  //   shuffleDeck();
  // };

  // const handleClickDeal = () => {
  //   dealDeck();
  // };

  // const handleClickSelect = () => {
  //   selectCards();
  // };

  // const handleClickDuel = () => {
  //   decideWinner("Fattest");
  // };

  // const handleClickSetup = () => {
  //   setupGame();
  // };

  // const handleClickGameLoop = () => {
  //   playGameRound("Fattest");
  // };

  // addCardToDeck(cards[0], 1)

  const addNewCard = (card) => {
    TopTrumpsService.addTopTrump(card).then((newCard) =>
      setCards([...cards, newCard])
    )
  }

  const deleteCardFromCards = idtoDelete => {
    TopTrumpsService.deleteTopTrump(idtoDelete).then(() => {
        setCards(cards.filter(card => card._id !== idtoDelete))
    })
  }

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Title cards={cards} gameVsComputer={gameVsComputer} setGameVsComputer={setGameVsComputer} />} />
          <Route
            path='/cards'
            element={
              <ViewCardsPage
                cards={cards}
                addNewCard={addNewCard}
                deleteCardFromCards={deleteCardFromCards}
              />
            }
          />
          <Route
            path='/play'
            element={
              <GamePageComputer
                cards={cards}
                playGameRound={playGameRound}
                player1Card={player1Card}
                player2Card={player2Card}
                winner={winner}
                controllingPlayer={controllingPlayer}
                setWinner={setWinner}
                setupGame={setupGame}
                player1Score={player1Score}
                player2Score={player2Score}
                player1DeckState={player1DeckState}
                player2DeckState={player2DeckState}
                cardComparison={cardComparison}
                setCardComparison={setCardComparison}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                gameVsComputer={gameVsComputer}
              />
            }
          />
          <Route path='/rules' element={<Rules />} />
          <Route path="*" element={< ErrorPage />} /> 
        </Routes>
      </Router>
      {/* 
      <h1>Welcome to TopTrumps</h1>
      <button onClick={handleClickAdd}>TESTING ADD</button>
      <button onClick={handleClickDelete}>TESTING DELETE</button>
      <button onClick={handleClickShuffle}>TESTING SHUFFLE</button>
      <button onClick={handleClickDeal}>TESTING DEAL</button>
      <button onClick={handleClickSelect}>TESTING SELECT</button>
      <button onClick={handleClickDuel}>TESTING Decide Winner</button>
      <button onClick={handleClickSetup}>TESTING Setup</button>
      <button onClick={handleClickGameLoop}>TESTING Loop</button>

      <ViewCardsPage cards={cards} /> */}
    </>
  )
}

export default App
