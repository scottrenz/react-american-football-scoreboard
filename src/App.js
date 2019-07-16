//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [LionScore, setLionScore] = useState(0); // Give these better names, and decide whether you want to pass an initial score into the state hook as the initialValu
  const [TigerScore, setTigerScore] = useState(0); // Give these better names, and decide whether you want to pass an initial score into the state hook as the initialValu
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{LionScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{TigerScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={ ()=> setLionScore(7 + LionScore) } className="homeButtons__touchdown">Home Touchdown</button>

          <button  onClick={ ()=> setLionScore(3 + LionScore) }className="homeButtons__fieldGoal">Home Field Goal</button>
          </div>
        <div className="awayButtons">
          <button onClick={ ()=> setTigerScore(7 + TigerScore) } className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={ ()=> setTigerScore(3 + TigerScore) } className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
