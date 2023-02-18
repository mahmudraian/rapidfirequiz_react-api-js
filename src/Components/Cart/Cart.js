import React, { useContext } from 'react';
import { NumberContext } from '../Singlequistion/Singlequistion';

const Cart = ({number}) => {

    return (
        <div>
            <p></p>
            <p>This is cart</p>
            <p> Number: {number}</p>
        </div>
    );
};

export default Cart;