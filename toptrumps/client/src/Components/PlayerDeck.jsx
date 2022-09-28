import React from "react";
import toptrumpback from "../images/toptrumpback.jpeg";
import '../css/Master.css'

{/* <li>
  <img className="trumpCardBack" src={toptrumpback} />
</li>; */}
const PlayerDeck = ({ deck }) => {
  const deckRender = deck.map(() => {
    return (
      <li className="playerDeckListItem">
        <img className="toptrumpbackdeck" src={toptrumpback} />
      </li>
    );
  });
  console.log(deckRender)

  return (
    <>
  <br />
  <br/> 
  <ul className="playerDeckList">{deckRender}</ul>;)
  </>)
}

export default PlayerDeck;
