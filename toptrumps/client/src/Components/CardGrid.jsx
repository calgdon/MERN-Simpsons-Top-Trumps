import React from "react";
import CardDetail from "./CardDetail";
import "./cardgrid.css"

const CardGrid = ({ cards }) => {
  // if (!cards) return <h2>Loading...</h2>;

  const CardList = cards.map((card) => {
    return <CardDetail card={card} key={card._id} />;
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
