import React from "react";
import "../css/Master.css";
import toptrumpback from "../images/toptrumpback.jpeg";

const GameForm = ({ card, controllingPlayer, playerNumber, setSelectedCategory, setCardComparison}) => {
  console.log("gameformcard", card);

  const handleClick = (e) => {
    
    e.preventDefault();
    setSelectedCategory(e.target.value);
    setCardComparison(true)
  };

  const playerCardRender =
      controllingPlayer == playerNumber ? (
        <div className="game-card-detail">
          <form action="">
            <h3 id="card-name"> {card.Individual} </h3>
            <br />
            <img
              className="character-image"
              src={card.img_url}
              alt="Photo of simpsons character"
            />
            <br />
            <button
              className="cardbutton"
              onClick={handleClick}
              value={"Most Lovable"}
            >
              Most Lovable: {card["Most Lovable"]}
            </button>{" "}
            <br />
            <button
              className="cardbutton"
              onClick={handleClick}
              value={"Smartest"}
            >
              Smartest: {card["Smartest"]}
            </button>{" "}
            <br />
            <button
              className="cardbutton"
              onClick={handleClick}
              value={"Fattest"}
            >
              Fattest: {card["Fattest"]}
            </button>{" "}
            <br />
            <button
              className="cardbutton"
              onClick={handleClick}
              value={"Biggest Nerd"}
            >
              Biggest Nerd: {card["Biggest Nerd"]}
            </button>{" "}
            <br />
            <button
              className="cardbutton"
              onClick={handleClick}
              value={"Greatest Anarchist"}
            >
              Greatest Anarchist: {card["Greatest Anarchist"]}
            </button>{" "}
            <br />
            <button
              className="cardbutton"
              onClick={handleClick}
              value={"Walk of Fame Rating"}
            >
              Walk of Fame Rating: {card["Walk of Fame Rating"]}
            </button>{" "}
          </form>
        </div>
      ) : (
        <img className="trumpCardBack" src={toptrumpback} />
      )
  

  return (
    <>
      {playerCardRender}
    </>
  );
};

export default GameForm;
