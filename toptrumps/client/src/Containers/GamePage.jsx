import React from "react";
import { useEffect } from "react";
import CardDetail from "../components/CardDetail";
import GameForm from "../components/GameForm";
import TopTrumpsService from "../services/TopTrumpsService";

const GamePage = ({cards, playGameRound, player1Card, player2Card,winner,controllingPlayer}) => {

const playerCard = controllingPlayer==1?player1Card:player2Card

const winnerRender = () =>{
 if (!winner){return}
 else{
  return(

  <h2>WE HAVE A WINNER and it's player {winner}</h2>
 )
  }
}

  return (
    <>
      <div>GamePage</div>
      <div>{winnerRender()}</div>
      <GameForm card={playerCard} playGameRound={playGameRound} controllingPlayer={controllingPlayer}/>
    </>
  );
};

export default GamePage;
