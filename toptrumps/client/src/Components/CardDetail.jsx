import React from "react";

const CardDetail = ({ card }) => {


  return(

  <li key = {card._id}>
  
  <p>Name: {card.Individual}</p>
  <p>Most Loveable: {card["Most Lovable"]}</p>
  <p>Smartest: {card.Smartest}</p>
  <p>Fattest: {card.Fattest}</p>
  <p>Biggest Nerd: {card["Biggest Nerd"]}</p>
  <p>Greatest Anarchist: {card["Greatest Anarchist"]}</p>
  <p>Walk of Fame Rating: {card["Walk of Fame Rating"]}</p>
  {/* <img className="character-image" src={card.img_url} alt="Photo of simpsons character" /> */}
  </li>
  )
};

export default CardDetail;
