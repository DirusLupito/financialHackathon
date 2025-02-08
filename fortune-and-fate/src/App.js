import { useState } from 'react';
import './App.css';
import './style.css';

function App() {

  //Player stage and balance
  const [player, setPlayer] = useState({
    stage: 1, // Starting stage
    balance: 1000, // Initial money amount
  });

  return (
    <div className="App">
      <div className='left-panel'>
        <h1 className='title'>Fortune And Fate</h1>
        <div className='info-container'>
          <h2 className='stage'>Stage: {player.stage}</h2>
          <h2 className='balance'>Balance: {player.balance}</h2>
        </div>
        <div className='main-screen'>
          <div className='container'>
            <div className='walk1'></div>
          </div>
        </div>
      </div>
      <div className='right-panel'>
        <h1 className='situation-prompt'>Prompt</h1>
        <div className='option-grid'>
          <button className='option'></button>
          <button className='option'></button>
          <button className='option'></button>
          <button className='option'></button>
        </div>
      </div>
    </div >
  );
}

export default App;
