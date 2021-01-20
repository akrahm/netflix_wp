import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Card from './Card';
import Sdata from './Sdata';


ReactDOM.render(
<>
<h1 className= "heading_style">List Of 5 Top Netflix Series</h1>
{Sdata.map((val,index)=>{
  console.log(index);
  return (
    <Card
      key={val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
);
  })}
</>,
  document.getElementById('root')
)

// Array map method used in the line 11 Synatx of arr map function is ------>>>>.


//  /* array.map(function name(val,index,arr){
//               return (
//
//                     ) ;           
//                })

// now syntax for fat arrow function

// const myname = (a,b) => a+b;