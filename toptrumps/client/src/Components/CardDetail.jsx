import React from "react";
import "../css/carddetail.css"

const CardDetail = ({ card, deleteCardFromCards}) => {

  const handleDeleteClick = () => {
    if (window.confirm("Are you Sure?")){
    deleteCardFromCards(card._id)}
  }


  return(

  <li key = {card._id} className="card-detail">
  
  <p className="character-name" id="paragraph">{card.Individual}</p>
  <img className="character-image" src={card.img_url} alt="Photo of simpsons character" />
  <p className="most-loveable" id="paragraph">Most Loveable: {card["Most Lovable"]}</p>
  <p className="smartest" id="paragraph">Smartest: {card.Smartest}</p>
  <p className="fattest" id="paragraph">Fattest: {card.Fattest}</p>
  <p className="biggest-nerd" id="paragraph">Biggest Nerd: {card["Biggest Nerd"]}</p>
  <p className="greatest-anarchist" id="paragraph">Greatest Anarchist: {card["Greatest Anarchist"]}</p>
  <p className="walk-of-fame-rating" id="paragraph">Walk of Fame Rating: {card["Walk of Fame Rating"]}</p>
  <button className='delete' onClick={handleDeleteClick}> Delete?</button>
  </li>
  )
};

export default CardDetail;
