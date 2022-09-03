import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../contexts/auth';
import { REGISTER, ERROR } from '../../contexts/auth/types';
import AuthForm from './AuthForm';
import setAuthToken from '../../utils/setAuthToken';

const Register = () => {
    const [, dispatch] = useContext(AuthContext);

    const register = data => {
        // Quand on reçoit le token, le mettre dans localStorage
        // Voir on maintient comment une 'session

        // api/users/register

        // fetch : let data = new  FormData();
        //  data.append('data', data);
        axios
            .post('/api/users/register', data)
            .then(res => {
                const { token, user } = res.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                setAuthToken(token);
                dispatch({ type: REGISTER, payload: token });
            })
            .catch(e => console.error(e));
    };

    return (
        <div className="container">
            <h2 className="text-info mt-3">
                Register or <Link to="/login">Login</Link>
            </h2>
            <AuthForm method={register} />
        </div>
    );
};

export default Register;
