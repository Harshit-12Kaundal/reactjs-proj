import React from "react";
import logo from "./LCO-logo-white.png";
import "./App.css";

class App extends React.Component{
  render(){
    return (
      <div className="main">
        <img src={logo} width="100" height="100" className="logo"></img>
        <h1 className="app-title"> LCO todo app</h1>
        <div className="container">
          Add an items.....
          <br/>
          <input type="text" className="input-btn" placeholder="Writer to do"/>
          <button className="btn">Add todo</button>
          <div className="list">
            <ul>
              <li>
                <input type="checkbox" name="" id=""/>
                Record youtube video
                <button className="btn-red">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;