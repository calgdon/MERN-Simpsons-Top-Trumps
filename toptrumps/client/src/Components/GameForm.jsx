import React from "react";
import { useEffect } from "react";
import "../css/Master.css";
import toptrumpback from "../images/toptrumpback.jpeg";

const GameForm = ({
  card,
  controllingPlayer,
  playerNumber,
  setSelectedCategory,
  setCardComparison,
  gameVsComputer,
}) => {
  console.log("gameformcard", card);

  useEffect(() => {
    gameVsComputer == true && controllingPlayer === 2
      ? computerTurnTrigger()
      : null;
  }, [card]);

  const computerTurnTrigger = () => {
    const categories = [
      "Most Lovable",
      "Smartest",
      "Fattest",
      "Biggest Nerd",
      "Greatest Anarchist",
      "Walk of Fame Rating",
    ];
    const maximums = {
      "Most Lovable": 10,
      Smartest: 29.5,
      Fattest: 49,
      "Biggest Nerd": 198,
      "Greatest Anarchist": 5,
      "Walk of Fame Rating": 20,
    };
    const minimums = {
      "Most Lovable": 3,
      Smartest: 22,
      Fattest: 20,
      "Biggest Nerd": 140,
      "Greatest Anarchist": 1,
      "Walk of Fame Rating": 7,
    };
    let computerDecision = "";
    let highestValue = 0;
    let currentValue = 0;
    categories.forEach((category) => {
      currentValue =
        (card[category] - minimums[category]) /
        (maximums[category] - minimums[category]);
      if (highestValue < currentValue) {
        highestValue = currentValue;
        computerDecision = category;
      }
    });
    console.log("computerDecision",playerNumber, computerDecision);
    console.log("highestValue", playerNumber, highestValue);
    setSelectedCategory(computerDecision);
    setCardComparison(true);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSelectedCategory(e.target.value);
    setCardComparison(true);
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
    );

  return <>{playerCardRender}</>;
};

export default GameForm;
