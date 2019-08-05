import React, { useReducer } from 'react';

export const Store = React.createContext();
const Provider = Store.Provider;

const initialState = {
  episodes: [],
  favourites: [],
};

const Reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
};

export const StoreProvider = props => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const value = { state, dispatch };
  return (
    <Provider value={value}>{props.children}</Provider>
  )
} 
