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
      "Most Lovable": 1,
      Smartest: 1,
      Fattest: 1,
      "Biggest Nerd": 1,
      "Greatest Anarchist": 1,
      "Walk of Fame Rating": 1,
    };
    const minimums = {
      "Most Lovable": 1,
      Smartest: 1,
      Fattest: 1,
      "Biggest Nerd": 1,
      "Greatest Anarchist": 1,
      "Walk of Fame Rating": 1,
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
    console.log("computerDecision", computerDecision);
    console.log("highestValue", highestValue);
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
