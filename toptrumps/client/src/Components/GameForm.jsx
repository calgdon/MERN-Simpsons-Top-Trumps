import React from 'react'

const GameForm = ({card,playGameRound,controllingPlayer}) => {
console.log("gameformcard",card)

const handleClick=(e)=>{
    e.preventDefault()
playGameRound(e.target.value)
}
  
  return (
    <>
    <h1>Player {controllingPlayer}</h1>
<form action="">

    Name: {card.Individual} <br />

    <button onClick={handleClick} value={"Most Lovable"}>Most Lovable: {card["Most Lovable"]}</button> <br />
    <button onClick={handleClick} value={"Smartest"}>Smartest: {card["Smartest"]}</button> <br />
    <button onClick={handleClick} value={"Fattest"}>Fattest: {card["Fattest"]}</button> <br />
    <button onClick={handleClick} value={"Biggest Nerd"}>Biggest Nerd: {card["Biggest Nerd"]}</button> <br />
    <button onClick={handleClick} value={"Greatest Anarchist"}>Greatest Anarchist: {card["Greatest Anarchist"]}</button> <br />
    <button onClick={handleClick} value={"Walk of Fame Rating"}>Walk of Fame Rating: {card["Walk of Fame Rating"]}</button> <br />
    <img className="character-image" src={card.img_url} alt="Photo of simpsons character" />

</form>

</>

)
  
}

export default GameForm