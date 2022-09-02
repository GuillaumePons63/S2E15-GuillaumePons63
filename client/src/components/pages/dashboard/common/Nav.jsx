import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar-admin collapse"
        >
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            aria-current="page"
                            to="/"
                        >
                            <span className="fas fa-store" /> WebSite
                        </NavLink>
                        <NavLink
                            end
                            className="nav-link"
                            aria-current="page"
                            to=""
                        >
                            <span className="fas fa-home" /> Dashboard
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            aria-current="page"
                            to="/profile/me"
                        >
                            <span className="fas fa-users" /> Votre Profile
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            aria-current="page"
                            to="/your/orders"
                        >
                            <span className="fas fa-shopping-cart" /> Vos
                            commandes
                        </NavLink>
                    </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Administration</span>
                </h6>

                <ul className="nav flex-column mb-2">
                    <Fragment>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                exact="true"
                                to="/dashboard/current"
                            >
                                <span
                                    className="fas fa-file"
                                    data-feather="file-text"
                                />{' '}
                                Resume
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                aria-current="page"
                                to="/dashboard/roles"
                            >
                                <span className="fas fa-user-lock" /> Gestion
                                des Rôles
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                aria-current="page"
                                to="/dashboard/employees"
                            >
                                <span className="fas fa-user" /> Employés
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                aria-current="page"
                                to="categories"
                            >
                                <span className="fas fa-file" /> Categories
                            </NavLink>
                        </li>
                    </Fragment>

                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            aria-current="page"
                            to="products"
                        >
                            <span className="fas fa-store" /> Produits
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            aria-current="page"
                            to="articles"
                        >
                            <span className="fas fa-pen" /> Articles (blog)
                        </NavLink>
                    </li>

                    <Fragment>
                        <li className="nav-item">
                            <NavLink
                                exact="true"
                                className="nav-link"
                                aria-current="page"
                                to="/dashboard/customers"
                            >
                                <span className="fas fa-users" /> Clients
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact="true"
                                className="nav-link"
                                aria-current="page"
                                to="/dashboard/reports"
                            >
                                <span className="fas fa-area-chart" /> Rapports
                            </NavLink>
                        </li>
                    </Fragment>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
