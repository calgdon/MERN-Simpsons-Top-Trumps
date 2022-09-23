import React from "react";

const CardDetail = ({ card }) => {


  return(
  <>
  <div>Name: {card.Individual}</div>
  <div>Most Loveable: {card["Most Lovable"]}</div>
  <div>Smartest: {card.Smartest}</div>
  <div>Fattest: {card.Fattest}</div>
  <div>Biggest Nerd: {card["Biggest Nerd"]}</div>
  <div>Greatest Anarchist: {card["Greatest Anarchist"]}</div>
  <div>Walk of Fame Rating: {card["Walk of Fame Rating"]}</div>
  <img src={card.img_url} alt="" />
</>
  )
};

export default CardDetail;
