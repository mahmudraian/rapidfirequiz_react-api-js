import React from 'react';

const Context = () => {
    return (
        <div className='react-blog'>
            <h3>How dose context api works</h3>
            <p><small>Context API is a feature in React that allows data to be passed down the component tree without having to manually pass props down from parent to child. It provides a way to share data between components that are not directly related.Here is an overview of how Context API works:Create a context object: To use Context API, you first need to create a context object using the createContext() method. This context object contains two components - a Provider and a Consumer.Set data in the Provider component: The Provider component is used to wrap the component tree that needs access to the data. The Provider component takes a value prop, which is the data that you want to share with the child components.</small></p>
        </div>
    );
};

export default Context;