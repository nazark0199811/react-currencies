import React, { useState } from 'react';

import { ShopingItem } from '../ShopingItem/ShopingItem';
import { exchangeRate } from '../../mocks/currencyExchange';
import {Clicker} from '../Clicker/Clicker'

import './App.css';

export function App() {
  const [total, setTotal] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [multiplier, setMultiplier] = useState(1);

  const updateTotal = (price) => {
    setTotal((prevTotal) => prevTotal + price);
  }

  const handleCurrencyChange = (changedCurrency) => {
    const exchangeRating = exchangeRate[currency][changedCurrency];
    if (exchangeRating === undefined) {
      return;
    }
    setMultiplier(exchangeRating);
    setTotal((prevTotal) => Math.floor(exchangeRating * prevTotal))
    setCurrency(changedCurrency);
  }

  return (
    <>
      <Clicker/>
      <h1 className="shop-title">Our shop page</h1>
      <div className='cyrrency-item'>
      <button className='currency-btn' onClick={() => handleCurrencyChange('USD')}>USD</button>
      <button className='currency-btn' onClick={() => handleCurrencyChange('EUR')}>EUR</button>
      <button className='currency-btn' onClick={() => handleCurrencyChange('RUB')}>RUB</button>
      <button className='currency-btn' onClick={() => handleCurrencyChange('UAH')}>UAH</button>
      </div>
 
      <div className="items-wrapper">
        <ShopingItem
          title="Iphone 12"
          description="This is Apple Iphone 12"
          currencyRate={multiplier}
          price={100} currency={currency}
          purchaseHandler={updateTotal}
        />
        <ShopingItem
          title="Iphone 12"
          description="This is Apple Iphone 12"
          currencyRate={multiplier}
          price={200} currency={currency}
          purchaseHandler={updateTotal}
        />
        <ShopingItem
          title="Iphone 12"
          description="This is Apple Iphone 12"
          currencyRate={multiplier}
          price={300} currency={currency}
          purchaseHandler={updateTotal}
        />
      </div>
      <p>Total: {total} {currency}</p>
    </>
  );
}



