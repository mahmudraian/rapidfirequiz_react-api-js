import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Option from '../Option/Option';

const Singlequistion = ({questions}) => {
    const{question,correctAnswer,options}=questions;
    const[number,setNumber]=useState(0)
    const handleoption=(option)=>{
      if(option===correctAnswer){
       const total =number+1;
       setNumber(total)
      }  else{
        console.log("hoynai!")
      }
    }
    
    return (
        <div>
            <h5>{question}</h5>
            <p>{correctAnswer}</p>
            {
                options.map(option=> <Option
                option={option}
                handleoption={handleoption}
                ></Option>)
            }
            <Cart number={number}></Cart>
        </div>
    );
};

export default Singlequistion;