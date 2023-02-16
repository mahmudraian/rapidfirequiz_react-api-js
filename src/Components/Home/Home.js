import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const quiz_topics= useLoaderData()
    console.log(quiz_topics);
    return (
        <div>
            <h4>This is home!</h4>
        </div>
    );
};

export default Home;