import React from 'react';

import './App.css';

let firstImage = 'http://bit.ly/2BgTuOC';
let secondImage = 'http://bit.ly/2OQR4OG';
let thirdImage = 'http://bit.ly/31iITNm';


function App() {
  return (
    <div>
    <div className="New">
     <strong><p id="one"> The New York Times</p></strong>
    </div>

    <div className="Content">
    
    <p id="twoshift">
    <span class="twodate">Jan.30, 2018</span><br></br>
    <span class="shifty">THE SHIFT</span><br></br>
    <span class="title">Kodak's Dubious Blockchain Gamble</span><br></br>
    <span class="conty">What's a 130-year-old photo company doing dabbling in cryptocurrency? Either revolutionizing digital rights management or trying to make a quick buck. </span><br></br>
    <span class="authy">By KEVIN ROOSE</span> </p> 
    <img class= "kod" src ={firstImage} alt="kod" width="300" height="200" />
    
    
   <hr></hr>

    <p id="threecontent">
    <span class="threedate">Jan.30, 2018</span><br></br>
    <span class="titlethree">Taiwan Retaliates Against Chinese Airlines, Hampering Lunar New Year Travel</span><br></br>
    <span class="contythree">Taiwan, pushing back over encroachment on Taian Strait airspace, may leave thousands without flights home for the holiday.</span><br></br>
    <span class="authythree">By CHRIS HORTON</span> </p>
    <img class= "plane" src ={secondImage} alt="plane" width="300" height="200"/>
   

  <hr></hr>

    <p id="fourcontent">
    <span class="fourdate">Jan.29, 2018</span><br></br>
    <span class="titlefour">New Jersey Embraces an Idea it Once Rejected: Make Utilities Pay to Emit Carbon</span><br></br>
    <span class="contyfour">Democratic governors nationwide are taking steps to tax or price emissions within their own borders, even as Trump dismnatles federal climate policy. </span><br></br>
    <span class="authyfour">By BRAD PLUMMER</span></p>
    <img class= "man" src ={thirdImage} alt="man" width="300" height="200"/>

    <hr></hr>
    </div>
   </div>
  );
}

export default App;
