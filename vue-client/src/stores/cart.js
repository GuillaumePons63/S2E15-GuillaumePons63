import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state() {
        return {
            products: JSON.parse(localStorage.getItem('cart')) || [],
        };
    },

    actions: {
        async addOrUpdate(product) {
            if (this.products.length > 0) {
                const item = this.products.find(item => item.id === product.id);
                if (item && product.quantity) {
                    item.qty = product.quantity;
                    item.quantity = product.quantity;
                    const newCart = this.products.map(p =>
                        p.id === item.id ? item : p
                    );

                    localStorage.setItem('cart', JSON.stringify(newCart));
                }
            } else {
                this.products.push(product);
                localStorage.setItem('cart', JSON.stringify(this.products));
            }
        },
    },
    // getters: {
    //     products() {
    //         return this.products;
    //     },
    // },
});
