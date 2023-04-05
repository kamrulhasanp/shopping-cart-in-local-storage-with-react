import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css';
import { getTotal } from '../../utilities/Calculate';
const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]) 
    useEffect (()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    },[])
    const total = getTotal(cosmetics)
    return (
        <div className='product'>
            <h1>Welcome to my cosmetics store</h1>
            <p>Money needed for all product: {total}</p>
            {
                cosmetics.map(cosmetic =><Cosmetic 
                    key={cosmetic.id}
                    cosmetic = {cosmetic}
                    />)
            }
        </div>
    );
};

export default Cosmetics;