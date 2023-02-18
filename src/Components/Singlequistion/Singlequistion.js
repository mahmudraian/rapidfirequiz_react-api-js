import React, { createContext, useContext, useState } from 'react';
import Option from '../Option/Option';
import './Singlequistion.css';
import { AnsnumberContext } from '../Question/Question';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEye } from '@fortawesome/free-solid-svg-icons';

const Singlequistion = ({questions}) => {
    const{question,correctAnswer,options}=questions;
    const[number,setNumber]=useState(1)
    const [answer,setAnswer]=useContext(AnsnumberContext);
    let number1=number;
    const handleoption=(option)=>{
      if(option===correctAnswer){

        setNumber(number+1)
        
          alert("Awesome!You select right option!");
        
       
       console.log(number)
      }  else{
        alert(" :( Please try again!");
      }
      
      setAnswer(number)
    
    }
    const handleshowcurrect=(correctAnswer)=>{
    
    alert(correctAnswer)
    // alert(answershow)
      
    }
    console.log(answer+number)
    return (

     
        <div className='single-question'>
           <div className="question-details">
           <h5>{question}</h5>
           <button className='eye-btn' onClick={()=>handleshowcurrect(correctAnswer)}>
           <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
           
           </button>
           </div>
            {/* <p>{correctAnswer}</p> */}
            <div className="option-part">
            {
                options.map(option=> <Option
                key={option}
                option={option}
                handleoption={handleoption}
          
                ></Option>)
                
            }
            
            
            </div>
          
        </div>

    );
};

export default Singlequistion;