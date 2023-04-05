import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css';
const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]) 
    useEffect (()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    },[])
    return (
        <div className='product'>
            <h1>Welcome to my cosmetics store</h1>
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