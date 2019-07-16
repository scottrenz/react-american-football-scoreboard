import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {
  const [quarter, setQuarter] = useState(1); // Give these better names, and decide whether you want to pass an initial score into the state hook as the initialValu
  const [down, setDown] = useState(1); // Give these better names, and decide whether you want to pass an initial score into the state hook as the initialValu
  const [ball, setBall] = useState(1); // Give these better names, and decide whether you want to pass an initial score into the state hook as the initialValu
  const [toGo, setToGo] = useState(1); // Give these better names, and decide whether you want to pass an initial score into the state hook as the initialValu

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div onClick={ ()=> setDown(  ( (1 + down ) % 8) ) } className="down__value">{down == 0 ? -1 : down > 4 ? (down - 9) : down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div onClick={ ()=> setToGo( 1 + toGo % 9) } className="toGo__value">{toGo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div onClick={ ()=> setBall(  ( (1 + ball ) % 98) ) } className="ballOn__value">{ball == 0 ? -1 : ball > 50 ? -(100 - ball) : ball}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div onClick={ ()=> setQuarter( 1 + quarter % 4) } className="quarter__value">{quarter}</div>
      </div>
    </div>
  );
};

export default BottomRow;
