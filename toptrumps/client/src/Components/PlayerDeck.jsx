import React from "react";
import toptrumpback from "../images/toptrumpback.jpeg";

{/* <li>
  <img className="trumpCardBack" src={toptrumpback} />
</li>; */}
const PlayerDeck = ({ deck }) => {
  const deckRender = deck.map(() => {
    return (
      <li className="playerDeckListItem">
        <img className="trumpCardBack" src={toptrumpback} />
      </li>
    );
  });
  console.log(deckRender)

  return <ul className="playerDeckList">{deckRender}</ul>;
};

export default PlayerDeck;
