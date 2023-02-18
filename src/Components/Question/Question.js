import React, { createContext, useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Quistion.css';
import Singlequistion, { NumberContext } from '../Singlequistion/Singlequistion';
 export const AnsnumberContext= createContext()
const Question = () => {
    const [answer,setAnswer]=useState()
    const quiz_q=useLoaderData()
    console.log(quiz_q)
    const  {name,id,questions}= quiz_q.data;
    
    
    

    return (
        <AnsnumberContext.Provider value={[answer,setAnswer]}>
        <div  className="main_home">
        <h3>Quiz OF {name}</h3>
            <div className='question-part'>
            
          <div className='main-question' >
          {
                questions.map(questions => <Singlequistion
                key={id}
                questions={questions}
                ></Singlequistion>)
            }
          </div>
             <div className="cart-contei">
             <Cart number={answer}></Cart>
             </div>
        </div>
        </div>
        </AnsnumberContext.Provider>
    );
};

export default Question;