import React from "react";
import toptrumpback from "../images/toptrumpback.jpeg";

{/* <li>
  <img className="trumpCardBack" src={toptrumpback} />
</li>; */}
const PlayerDeck = ({ deck }) => {
  const deckRender = deck.map(() => {
    return (
      <li>
        <img className="trumpCardBack" src={toptrumpback} />
      </li>
    );
  });
  console.log(deckRender)

  return <ul>{deckRender}</ul>;
};

export default PlayerDeck;
