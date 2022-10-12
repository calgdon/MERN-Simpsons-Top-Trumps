import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Components/Navbar'
import '../css/Master.css'

const Rules = () => {
    return (
      <>
      <NavBar/>
      <div id="rules-flex-container">
    <div id="rules-div">

    <h2>Rules</h2>
    
    <ul id='rules-Ul'>
    <li>Win game by being the first player to win all the cards.</li>
    <li>Two or more players can play Top Trumps. Shuffle the cards and give each player an equal number of cards.</li>
    <li>Players must keep all their cards in a pile, without seeing other players' cards.  Only look at the top card.</li>
    <li>Player 1 chooses a stat they think is highest from their card.</li>
    <li>Other players then look at their top card and compare the stat from the declared category.</li>
    <li>The player that has the highest stat wins the round.  They take the losing card or cards and put them at the bottom of their pile.</li>
    <li>The winner is the player with all the cards at the end of the game.</li>
    </ul>
    </div>
    </div>
      </>
    
    )
  }
  
  export default Rules
