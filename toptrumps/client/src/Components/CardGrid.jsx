import React from "react";
import CardDetail from "./CardDetail";
import "../css/Master.css"

const CardGrid = ({ cards, deleteCardFromCards, search}) => {
  // if (!cards) return <h2>Loading...</h2>;

  const CardList = cards.filter((card) => card.Individual.toLowerCase().includes(search))
  .map((card) => {
    return (<CardDetail card={card} key={card._id} deleteCardFromCards={deleteCardFromCards} />);
  });

  return (
    <>
      <div id="CardGrid">
      <ul id="CardList">{CardList}</ul>
      </div>
    </>
  );
};

export default CardGrid;
