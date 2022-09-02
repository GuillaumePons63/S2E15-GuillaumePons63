import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { CartContext } from '../../contexts/cart';
import { GET_CART_ITEMS } from '../../contexts/cart/types';
import Tbody from './Tbody';

const Cart = () => {
    const [state, dispatch] = useContext(CartContext);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        // url : /api/cart
        // Récupérer les ids sous form de tableau
        const ids = state?.products.map(p => p.id);
        // On les met dans l'ordre
        ids.sort();

        // On fait la requête
        axios
            .post('/api/cart', { ids: ids })
            .then(res => dispatch({ type: GET_CART_ITEMS, payload: res.data }))
            .catch(e => console.error(e));
    };

    return (
        <div className="container">
            {state?.products.length ? (
                <Tbody products={state.products} />
            ) : (
                <h2>Aucun produit dans le panier</h2>
            )}
        </div>
    );
};

export default Cart;
