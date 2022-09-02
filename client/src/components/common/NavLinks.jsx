import { Fragment, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { LOGOUT } from '../../contexts/auth/types';
import { CartContext } from '../../contexts/cart';
import { AuthContext } from '../../contexts/auth';

// Mettre des produits dans le panier
const NavLinks = () => {
    const [cartState] = useContext(CartContext);
    const [authState, dispatch] = useContext(AuthContext);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(cartState?.products.length);
    }, [cartState]);

    const logout = e => {
        e.preventDefault();

        dispatch({ type: LOGOUT, payload: null });
    };

    return (
        <ul>
            <li>
                <NavLink to="/shop">Shop</NavLink>
            </li>
            {!authState?.isAuthenticated && (
                <Fragment>
                    <li>
                        <NavLink to="/register">Signup</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Sign in</NavLink>
                    </li>
                </Fragment>
            )}
            {authState?.isAuthenticated ? (
                <Fragment>
                    <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={logout} to="/logout">
                            Logout
                        </NavLink>
                    </li>
                </Fragment>
            ) : null}
            <li>
                <NavLink to="/cart">
                    Cart{' '}
                    <span className="cart-count">
                        <span>{count}</span>
                    </span>
                </NavLink>
            </li>
        </ul>
    );
};

NavLinks.propTypes = {
    cart: PropTypes.object,
};

export default NavLinks;
