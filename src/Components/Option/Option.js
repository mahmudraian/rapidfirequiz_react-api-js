import React from 'react';

const Option = ({option ,handleoption}) => {
    return (
        <div>
           <button onClick={()=>handleoption(option)} >
        {option}
        </button>
          
        </div>
    );
};

export default Option;