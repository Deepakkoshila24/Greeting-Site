import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './index.css';

let curDate = new Date();
curDate = curDate.getHours();
let greeting ="";
const cssStyle ={};

if(curDate >=5 && curDate < 12){
  greeting = 'Good Morning Master';
  cssStyle.color = "Green" ;
}else if(curDate >=12 && curDate < 16){
  greeting = 'Good Afternoon Master';
  cssStyle.color = "greenyellow";
}else if(curDate >= 16 && curDate<21){
  greeting = 'Good Evening Master';
  cssStyle.color = "Orange";
}else{
  greeting = 'Good night Master';
  cssStyle.color = "Black";
}

ReactDOM.render(
  <>
  <div>
  <h1><span style={cssStyle}>{greeting},<App/></span></h1>{"\n"},
  </div>
  </>,
  document.getElementById('root')
);