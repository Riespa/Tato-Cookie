import React from 'react';
import "../styles/cookieProductCard.css";

const CookieCard = ({name, img, desc, price}) => {
    return (
        <div className='cookie-card'>
            <img className='cookie-card-img' src={img} alt={name} />
            <h2 className='cookie-card-title'>{name}</h2>
            <p className='cookie-card-description'>{desc}</p>
            <p className='cookie-card-price'>{price}</p>
        </div>
    );
};

export default CookieCard;