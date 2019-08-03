import React from 'react';

export const Store = React.createContext();
const Provider = Store.Provider;

const initialState = {};

const Reducer = () => {};

export const StoreProvider = props => <Provider value='data from store'>{props.children}</Provider>;
