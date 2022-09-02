import { useState } from 'react';
import PropTypes from 'prop-types';

const AuthForm = ({ method }) => {
    const [formData, setFormData] = useState();

    const handleChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();

        method(formData);
    };
    return (
        <form onSubmit={handleSubmit} className="mt-5 mb-5">
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    className="form-control"
                    name="email"
                    type="email"
                    id="email"
                    onChange={handleChange}
                    placeholder="
            Your Email"
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    className="form-control"
                    name="password"
                    id="password"
                    type="password"
                    onChange={handleChange}
                    placeholder="Your password"
                />
            </div>
            <button type="submit">Envoyer</button>
        </form>
    );
};

AuthForm.propTypes = {
    method: PropTypes.func.isRequired,
};

export default AuthForm;
