import React, { useState, useContext, useEffect, Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { LOGIN, ERROR } from '../../contexts/auth/types';
import { AuthContext } from '../../contexts/auth';
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';
import setAuthToken from '../../utils/setAuthToken';
const Login = () => {
    const [authState, dispatch] = useContext(AuthContext);

    const login = data => {
        // Quand on reçoit le token, le mettre dans localStorage
        // Voir on maintient comment une 'session'
        // api/auth
        axios
            .post('/api/auth', data)
            .then(res => {
                const { token, user } = res.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                setAuthToken(token);
                dispatch({ type: LOGIN, payload: res.data });
            })
            .catch(e => console.error(e));
    };

    return (
        <Fragment>
            {authState.isAuthenticated ? (
                <Navigate to="/dashboard" />
            ) : (
                <div className="container mt-3">
                    <h2 className="text-info">
                        Login or <Link to="/register">Register</Link>
                    </h2>
                    <AuthForm method={login} />
                </div>
            )}
        </Fragment>
    );
};

export default Login;
