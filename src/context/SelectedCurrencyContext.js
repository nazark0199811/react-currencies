import React, { createContext, useState } from "react";

export const SelectedCurrencyContext = createContext();

export const SelectedCurrencyProvider = ({children}) => {
    const { Provider } = SelectedCurrencyContext;
    const [currency, setCurrency] = useState('USD');

    return (
        <Provider value={[currency, setCurrency]}>
            {children}
        </Provider>
    )
}