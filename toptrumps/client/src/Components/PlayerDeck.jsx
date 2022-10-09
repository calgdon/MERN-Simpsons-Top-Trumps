import React from "react";
import toptrumpback from "../images/toptrumpback.jpeg";
import '../css/Master.css'


const PlayerDeck = ({ deck }) => {
  const deckRender = deck.map(() => {
    return (
      <li className="playerDeckListItem">
        <img className="toptrumpbackdeck" src={toptrumpback} />
      </li>
    );
  });

  return (
    <>
  <br />
  <br/> 
  <ul className="playerDeckList">{deckRender}</ul>
  </>)
}

export default PlayerDeck;
