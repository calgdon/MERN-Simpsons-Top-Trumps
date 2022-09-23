import React from "react";
import CardDetail from "./CardDetail";

const CardGrid = ({ cards }) => {


  if (!cards) return <h2>Loading...</h2>
    const CardList = cards.map((card)=>{
      return(
        <>
       
        <CardDetail card = {card} key = {card._id}/> 
        {/* delete needs to be drilled here later */}
      </>
      )
    })



  return (
    <>
      <div>CardGrid</div>
      <ul>{CardList}</ul>
    </>
  );
};

export default CardGrid;
