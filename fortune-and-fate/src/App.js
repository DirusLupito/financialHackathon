import { useState } from "react";
import "./App.css";
import "./style.css";
import PlotCanvas from "./gambleGame/PlotCanvas";

function App() {
  // Player data
  const [player, setPlayer] = useState({
    stage: 1,
    balance: 5000, // Starting money
  });

  // Which broad path the user chose: null, "career", or "college"
  const [route, setRoute] = useState(null);

  // Which specific job/major was picked
  const [subOption, setSubOption] = useState(null);

  // Handle route choice + deduct money if college
  const handleRouteChoice = (choice) => {
    if (choice === "college") {
      // Deduct $80k tuition
      setPlayer((prevPlayer) => ({
        ...prevPlayer,
        balance: prevPlayer.balance - 80000,
      }));
    }
    setRoute(choice);
    setSubOption(null);
  };

  // Prompt text defaults
  let promptText = "You just graduated high school! Do you want to pick a career or go to college?";
  let options = [
    { label: "Career", onClick: () => handleRouteChoice("career") },
    { label: "College", onClick: () => handleRouteChoice("college") },
  ];

  // Update prompt + options if user picks a path
  if (route === "career") {
    promptText = "Which career do you want to choose?";
    options = [
      { label: "Retail Associate", onClick: () => setSubOption("retail") },
      { label: "Sales Representative", onClick: () => setSubOption("sales") },
      { label: "IT Support", onClick: () => setSubOption("it") },
    ];
  } else if (route === "college") {
    promptText = "Which major do you want to choose?";
    options = [
      { label: "Engineering", onClick: () => setSubOption("engineering") },
      { label: "Business", onClick: () => setSubOption("business") },
      { label: "Arts", onClick: () => setSubOption("arts") },
    ];
  }

  // Show a small message once a sub-option is chosen
  const chosenSubPath = subOption
    ? `You chose the ${subOption} path! (Add further game logic here.)`
    : "";

  return (
    <div className="App">
      {/* LEFT PANEL */}
      <div className="left-panel">
        <h1 className="title">Fortune And Fate</h1>

        <div className="info-container">
          <h2 className="stage">Stage: {player.stage}</h2>
          <h2 className="balance">Balance: {player.balance}</h2>
        </div>

        <div className="main-screen">
          <div className="container">
            <div className="walk1"></div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <h1 className="situation-prompt">{promptText}</h1>

        <div className="option-grid">
          {options.map((opt, i) => (
            <button key={i} className="option" onClick={opt.onClick}>
              {opt.label}
            </button>
          ))}
        </div>

        {subOption && (
          <p style={{ color: "white", textAlign: "center" }}>{chosenSubPath}</p>
        )}

        <div>
          <h1>Gamble Game</h1>
          <PlotCanvas />
        </div>
      </div>
    </div>
  );
}

export default App;