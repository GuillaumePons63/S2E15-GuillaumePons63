import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state() {
        return {
            products: JSON.parse(localStorage.getItem('cart')) || [],
        };
    },

    /**
     * * TODO : régler les quantités
     */
    actions: {
        async addOrUpdate(product) {
            if (this.products.length > 0) {
                this.updateProduct(product);
            } else {
                this.addProduct(product);
            }
        },
        addProduct(product) {
            product.qty = product.quantity;
            this.products.push(product);
            localStorage.setItem('cart', JSON.stringify(this.products));
        },
        updateProduct(product) {
            const item = this.products.find(item => item.id === product.id);

            if (item && product.quantity) {
                item.qty = product.quantity;
                item.quantity = product.quantity;
                const newCart = this.products.map(p =>
                    p.id === item.id ? item : p
                );

                localStorage.setItem('cart', JSON.stringify(newCart));
            } else {
                this.addProduct(product);
            }
        },
    },
    // getters: {
    //     products() {
    //         return this.products;
    //     },
    // },
});
