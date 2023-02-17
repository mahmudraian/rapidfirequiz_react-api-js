import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Singlequistion from '../Singlequistion/Singlequistion';

const Question = () => {

    const quiz_q=useLoaderData()
    console.log(quiz_q)
    const  {name,id,logo,questions}= quiz_q.data;

    return (
        <div>
            <h3>Quiz OF {name}</h3>
            <img src={logo} alt=''></img>
            {
                questions.map(questions => <Singlequistion
                key={id}
                questions={questions}
                ></Singlequistion>)
            }
        </div>
    );
};

export default Question;