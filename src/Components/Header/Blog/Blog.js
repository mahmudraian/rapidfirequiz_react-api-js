import React from 'react';
import Context from './Contextapi/Context';
import ReactRouter from './ReactRouter/ReactRouter';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <h1>Hi from Raian!!</h1>
           <div className="blog-content">
           <div><ReactRouter></ReactRouter></div>
            <div><Context></Context></div>
           </div>
        </div>
    );
};

export default Blog;