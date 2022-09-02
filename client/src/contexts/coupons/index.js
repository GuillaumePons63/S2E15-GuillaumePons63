import { createContext, useReducer } from 'react';

import { GET_COUPONS } from './types';
// Définition du state, du context etc etc
const initialState = {
  coupons: [],
  coupon: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const CouponContext = createContext();

export const CouponProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return (
    <CouponContext.Provider value={value}>{children}</CouponContext.Provider>
  );
};
