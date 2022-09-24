import { useEffect, useState } from "react";
import "./App.css";
import ViewCardsPage from "./Containers/ViewCardsPage";
import TopTrumpsService from "./services/TopTrumpsService"


function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    TopTrumpsService.getTopTrumps().then((cards) => setCards(cards));
  },[]);

  return (
    <>
      <h1>Welcome to TopTrumps</h1>
      <ViewCardsPage cards={cards}/>
    </>
  );
}

export default App;
