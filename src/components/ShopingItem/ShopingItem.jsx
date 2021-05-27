import React, { useState, useEffect } from 'react';


export const ShopingItem = ({ title, description, price, purchaseHandler, currency, currencyRate }) => {
    const [updatedPrice, setUpdatedPrice] = useState(price);

    useEffect(() => {
        setUpdatedPrice((prevPrice) => Math.floor(prevPrice * currencyRate));
    }, [currencyRate]);

    return (
        <div className="item-currency">
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{currency} {updatedPrice}</p>
            <button onClick={() => purchaseHandler(price)}>Buy</button>
        </div>
    )
};