import React from 'react';
import '../Cosmetics/Cosmetics.css';
import { addToDb, removeFromDb } from '../../utilities/fackedb';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic

    const addToCart =(id) =>{
        //localStorage.setItem(id, 1)
        addToDb(id);
    }
    const removeFromCart = id =>{
        removeFromDb(id);
    }

    //const addToCartWithPera = () => addToCart(id)
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>It has ID: {id}</small></p>
            {/* <button onClick={addToCartWithPera}>Add to cart</button> */}
            <button onClick={() => addToCart(id)}>Add to cart</button>
            <button onClick={()=> removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;