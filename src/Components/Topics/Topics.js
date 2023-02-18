import React, { createContext } from 'react';
import './Topics.css';
export const TopicContext=createContext();

const Topics = ({topics ,handlestartquiz}) => {
    const {id,name,logo,total}=topics;


    return (
        <TopicContext.Provider value={[name,total]}>
        <div>
           <div className="topics_content">
           <img src={logo} alt=''></img>
            <h1>{name}</h1>
            <button className='topic-btn' onClick={()=>handlestartquiz(id)}> Start quiz</button>
           </div>
        </div>
        </TopicContext.Provider>
    );
};

export default Topics;