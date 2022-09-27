import React from "react";
import "../css/carddetail.css"

const CardDetail = ({ card }) => {


  return(

  <li key = {card._id} className="card-detail">
  
  <p className="character-name">{card.Individual}</p>
  <img className="character-image" src={card.img_url} alt="Photo of simpsons character" />
  <p className="most-loveable">Most Loveable: {card["Most Lovable"]}</p>
  <p className="smartest">Smartest: {card.Smartest}</p>
  <p className="fattest">Fattest: {card.Fattest}</p>
  <p className="biggest-nerd">Biggest Nerd: {card["Biggest Nerd"]}</p>
  <p className="greatest-anarchist">Greatest Anarchist: {card["Greatest Anarchist"]}</p>
  <p className="walk-of-fame-rating">Walk of Fame Rating: {card["Walk of Fame Rating"]}</p>

  </li>
  )
};

export default CardDetail;
