import React from 'react';
import './Option.css';

const Option = ({option ,handleoption}) => {
    return (
        <div className='options'>
           <button className='option-btn' onClick={()=>handleoption(option)} >
           
        {option}
        </button>
          
        </div>
    );
};

export default Option;