import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";
const cssStyle = {};

if (curDate >= 1 && curDate < 12) {
   greeting = "Good Morning";
   cssStyle.color = 'green';
}
else if (curDate >= 12 && curDate < 20) {
   greeting = "Good Evening";
   cssStyle.color = 'orange';
}
else {
   greeting = "Good Night";
   cssStyle.color = 'grey';
}


ReactDOM.render(
   <>
      <div>
         <h1 >
            Hello Sir/Mam, <span style={cssStyle}>{greeting} </span>
         </h1>
      </div>
   </>,
   document.getElementById("root")
);