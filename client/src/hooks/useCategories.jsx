import { useState, useEffect } from 'react';

import { server_url } from '../utils/config';

function useCategories() {
    const [categories, setCategories] = useState();

    useEffect(() => {
        getCategories().then(res => setCategories(res));
    }, []);

    return [categories, setCategories];
}
async function getCategories() {
    try {
        const response = await fetch(`${server_url}/categories`);

        const categories = await response.json();

        return categories;
    } catch (e) {
        console.error(e.message);
    }
}

export default useCategories;
