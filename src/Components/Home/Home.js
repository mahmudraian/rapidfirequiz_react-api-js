import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Homepara from '../Home-para/Homepara';
import Topics from '../Topics/Topics';
import './Home.css';

const Home = () => {
    const quiz_topics= useLoaderData()

    const navigate=useNavigate()

    const handlestartquiz=(id)=>{
        navigate(`/home/${id}`)
    
    }

    console.log(quiz_topics.data);
    return (
      <div className='home'>
        <div className="home_intro">
        <div className='home-img'>
            <img src='https://i.ibb.co/vx905gD/students-knowing-right-answer.jpg' alt=''></img>
        </div>
        <div className='paragraph'>
            <h4>This is our online knowledge home!!!</h4>
            <Homepara></Homepara>
            <p></p>
        </div>

        </div>
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
      {/* <div className="cart-conteiner">
        <h4>This is cart(HOME)</h4>
      </div> */}
       </div>
       </div>
    );
};

export default Home;