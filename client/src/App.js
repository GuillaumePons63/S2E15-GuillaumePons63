import { Fragment, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './components/pages/dashboard/dashboard.css';
import { CategoryProvider } from './contexts/categories';
import { ProductProvider } from './contexts/products';
import { CartProvider } from './contexts/cart';
import { CouponProvider } from './contexts/coupons';
import { AuthContext } from './contexts/auth';
import { LOGIN } from './contexts/auth/types';
import setAuthToken from './utils/setAuthToken';
import NotFound from './components/pages/NotFound';
import Shop from './components/pages/Shop';
import Landing from './components/pages/Landing';
import Featured from './components/pages/Featured';
import Dashboard from './components/pages/dashboard/Dashboard';
import CreateCategory from './components/pages/dashboard/CreateCategory';
import CreateProduct from './components/pages/dashboard/CreateProduct';
import Product from './components/pages/ProdPage';
import Welcome from './components/pages/dashboard/Welcome';
import Cart from './components/pages/Cart';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CreateRole from './components/pages/dashboard/CreateRole';
const App = () => {
    const [authState, dispatch] = useContext(AuthContext);
    useEffect(() => {
        // Ici, vérification du localstorage pour le token d'authentification
        // S'il est présent on configure axios, sinon rien
        if (localStorage.getItem('cart') === null) {
            localStorage.setItem('cart', '[]');
        }
        if (localStorage.getItem('user') === null) {
            localStorage.setItem('user', '{}');
        }

        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));

        if (token) {
            setAuthToken(token);

            dispatch({ type: LOGIN, payload: { token, user } });
        }
    }, []);
    return (
        <CategoryProvider>
            <ProductProvider>
                <CouponProvider>
                    <CartProvider>
                        <Fragment>
                            <Routes>
                                <Route
                                    exact="true"
                                    path="/"
                                    element={<Landing />}
                                >
                                    <Route
                                        path="register"
                                        element={<Register />}
                                    />
                                    <Route path="login" element={<Login />} />
                                    <Route index element={<Featured />} />
                                    <Route path="shop" element={<Shop />} />
                                    <Route
                                        path="/product/:id"
                                        element={<Product />}
                                    />
                                    <Route path="/cart" element={<Cart />} />
                                    <Route
                                        path="*"
                                        element={<NotFound />}
                                        status={404}
                                    />
                                </Route>
                                <Route path="dashboard" element={<Dashboard />}>
                                    <Route index element={<Welcome />} />
                                    <Route
                                        path="categories"
                                        element={<CreateCategory />}
                                    />
                                    <Route
                                        path="products"
                                        element={<CreateProduct />}
                                    />
                                    <Route
                                        path="roles"
                                        element={<CreateRole />}
                                    />
                                </Route>
                            </Routes>
                        </Fragment>
                    </CartProvider>
                </CouponProvider>
            </ProductProvider>
        </CategoryProvider>
    );
};

export default App;
