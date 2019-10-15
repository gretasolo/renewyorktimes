import React from 'react';

import './App.css';

function App() {
  return (
    <div>
    <div className="New">
     <strong><p id="one"> The New York Times</p></strong>
    </div>

    <div className="Content">
    
    <p id="twoshift">THE SHIFT
    Kodak's Dubious Blockchain Gamble
    What's a 130-year-old photo company doing dabbling in cryptocurrency? Either revolutionizing digital rights management or trying to make a quick buck. 
    By KEVIN ROOSE</p> 
   
   <hr></hr>

    <p id="threecontent">Taiwan Retaliates Against Chinese Airlines, Hampering Lunar New Year Travel
    By CHRIS HORTON</p>

  <hr></hr>

    <p id="fourcontent">New Jersey Embraces an Idea it Once Rejected: Make Utilities Pay to Emit Carbon
    By BRAD PLUMMER</p>

    <hr></hr>
   </div>
   <div className="Dates">
   <p id="twodate">Jan.30, 2018</p>
   <p id="threedate">Jan.30, 2018</p>
   <p id="fourdate">Jan.29, 2018</p>
  </div>
   </div>
  );
}

export default App;
