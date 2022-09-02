import { useState, useEffect } from 'react';

// Module à créer
import { server_url } from '../utils/config';

function useProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(res => setProducts(res));
    }, []);

    return [products, setProducts];
}
async function getProducts() {
    try {
        const response = await fetch(`${server_url}/products`);

        const products = await response.json();

        return products;
    } catch (e) {
        console.error(e.message);
    }
}

export default useProducts;
