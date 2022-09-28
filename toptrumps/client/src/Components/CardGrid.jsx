import React from "react";
import CardDetail from "./CardDetail";
import "../css/Master.css"

const CardGrid = ({ cards, deleteCardFromCards}) => {
  // if (!cards) return <h2>Loading...</h2>;

  const CardList = cards.map((card) => {
    return (<CardDetail card={card} key={card._id} deleteCardFromCards={deleteCardFromCards} />);
  });

  return (
    <>
      <div className="CardGrid">
      <ul className="CardList">{CardList}</ul>
      </div>
    </>
  );
};

export default CardGrid;
