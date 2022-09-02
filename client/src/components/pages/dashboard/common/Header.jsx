import { Fragment, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../../../contexts/auth/types';
import { AuthContext } from '../../../../contexts/auth';

const Header = () => {
    const [, dispatch] = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = e => {
        e.preventDefault();

        dispatch({ type: LOGOUT, payload: null });

        navigate('/');
    };
    return (
        <Fragment>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <Link
                    className="navbar-brand col-md-3 col-lg-2 me-0 px-3"
                    to="/"
                >
                    E-commerce Dashboard
                </Link>

                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <Link
                            className="nav-link px-3"
                            to="/logout"
                            onClick={logout}
                        >
                            Sign out
                        </Link>
                    </div>
                </div>
            </header>
            )}
        </Fragment>
    );
};

export default Header;
