import React from 'react';
import './Topics.css';

const Topics = ({topics ,handlestartquiz}) => {
    const {id,name,logo}=topics;

    return (
        <div>
           <div className="topics_content">
           <img src={logo} alt=''></img>
            <h1>{name}</h1>
            <button className='topic-btn' onClick={()=>handlestartquiz(id)}> Start quiz</button>
           </div>
        </div>
    );
};

export default Topics;