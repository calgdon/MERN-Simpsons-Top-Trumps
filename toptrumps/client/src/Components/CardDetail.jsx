import React from "react";
import "../css/Master.css"

const CardDetail = ({ card, deleteCardFromCards}) => {

  const handleDeleteClick = () => {
    if (window.confirm("Are you Sure?")){
    deleteCardFromCards(card._id)}
  }


  return(

  <li key = {card._id} className="card-detail">
  
  <p className="card-category" id="card-name" >{card.Individual}</p>
  <img className="character-image" src={card.img_url} alt="Photo of simpsons character" />
  <p className="card-category" >Most Loveable: {card["Most Lovable"]}</p>
  <p className="card-category" >Smartest: {card.Smartest}</p>
  <p className="card-category" >Fattest: {card.Fattest}</p>
  <p className="card-category" >Biggest Nerd: {card["Biggest Nerd"]}</p>
  <p className="card-category" >Greatest Anarchist: {card["Greatest Anarchist"]}</p>
  <p className="card-category" >Walk of Fame Rating: {card["Walk of Fame Rating"]}</p>
  <button className='delete-button' onClick={handleDeleteClick}> Delete</button>
  </li>
  )
};

export default CardDetail;
