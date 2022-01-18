
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';


ReactDom.render(

        <>
           <App/>
        </>,
        
    document.getElementById("root")
    );
    
    




























// import React from 'react';
// import ReactDom from 'react-dom';
// import  {add, sub, mult, div} from './Calci';



// ReactDom.render(

//     <>
//         <ul>
//             <li>sum of two number is {add(40, 4)}</li>
//             <li>sub of two number is {sub(40, 4)}</li>
//             <li>div of two number is {div(40, 4)}</li>
//             <li>mult of two number is {mult(40, 4)}</li>
//         </ul>
//     </>,
    
// document.getElementById("root")
// );














//  Rewrite our React Project into Components in React JS
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App.jsx';


// ReactDOM.render(
//  <App/>,
//  document.getElementById("root")
// )











// Functional Component in React JS 
// import React from 'react';
// import reactDom from 'react-dom';
// import App from './App.jsx';

// reactDom.render(
  
//   <App/>,

//   document.getElementById("root")
// );




//Creating Simple Greeting Website using React JS
// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css'
// let curDate = new Date(2022, 5, 5, 5);
// curDate = curDate.getHours();

// let greeting ="";
// const cssStyle ={
 
// };

// if(curDate >=1 && curDate < 12){
//   greeting ="Good Morning";
//   cssStyle.color = 'green';
// }  else if (curDate >=12 && curDate < 19)
//  { greeting ="Good Afternoon";
//  cssStyle.color = 'orange';
// }  else { greeting ="Good Night";
// cssStyle.color = 'black';
// }

// ReactDOM.render(
//    <>
//       <div>
//        <h1>Hello sir, <span style={cssStyle}>{greeting}</span></h1>
//       </div>
//    </>,
// document.getElementById("root")
// )
// ;





















































// //(import Reat from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// const name = "pushpak";
// const img1 ="https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/id/237/200/300";
// const img3 = "https://picsum.photos/200/300";
// const link = "https://www.newtonschool.co/";
// const heading = {
//   color: '#fa9191',
//   textAlign:'center',
//   textTransform: 'capitalize',
//   fontWeight: 'bold',
//   textShadow: '0px 2px 4px #1fe9c5',
//   margin: '50px 0',
//   fontFamily: '"Josefin Sans", sans-serif'
// }
// //.heading {
//  // color: #fa9191;
//  // text-align: center;
//  // text-transform: capitalize;
//  // font-weight: bold;
//  // text-shadow: 0px 2px 4px #1fe9c5;
//  // margin: 50px 0;
//   //font-family: 'Josefin Sans', sans-serif;
// //}

// ReactDOM.render(

//   <>
//     <h1 style={heading}>Hello My name is {name} </h1>
//     <div className="img_div">
//          <img src={img1} alt="randomimages"/>
//          <img src={img2} alt="randomimages"/>
//       <a href="https://www.newtonschool.co/" target={"_pushpak"}>  
//          <img src={img3} alt="randomimages"/>
//      </a>
//   </div>
//   </>,
//   document.getElementById("root")
// );)