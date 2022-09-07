import { createContext, useReducer } from 'react';
import { REGISTER, LOGIN, LOGOUT, ERROR, GET_USER } from './types';
import setAuthToken from '../../utils/setAuthToken';
// Définition du state, du context etc etc
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    user: {},
};

const reducer = (state, action) => {
    switch (action.type) {
        case REGISTER:
        case LOGIN:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                isAuthenticated: true,
                loading: false,
            };
        // Y penser
        case LOGOUT:
        case ERROR: {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setAuthToken();
            return {
                ...state,
                token: null,
                user: {},
                isAuthenticated: false,
                loading: true,
            };
        }

        case GET_USER: {
            return {
                ...state,
                user: action.payload,
            };
        }
    }
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const value = useReducer(reducer, initialState);

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
