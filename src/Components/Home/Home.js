import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Topics from '../Topics/Topics';
import './Home.css';

const Home = () => {
    const quiz_topics= useLoaderData()

    const navigate=useNavigate()

    const handlestartquiz=(id)=>{
        navigate(`/home/${id}`)
        console.log(id)
    }

    console.log(quiz_topics.data);
    return (
       <div className="main_home">
         <div className='topics-part'>
          
          {
          quiz_topics.data.map(topics => <Topics 
            
            key={topics.id} 
            topics={topics}
            handlestartquiz={handlestartquiz}
            ></Topics>)
          }
          
      </div>
      <div className="cart-conteiner">
        <h4>This is cart</h4>
      </div>
       </div>
    );
};

export default Home;