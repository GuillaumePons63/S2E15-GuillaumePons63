export default {
    methods: {
        convertToEuro(priceHT) {
            return priceHT / 100;
        },

        addTva(priceHT) {
            const TVA = 20 / 100;

            const montantTVA = priceHT * TVA;

            return priceHT + montantTVA;
        },

        formatPrice(priceHT) {
            const price = this.addTva(this.convertToEuro(priceHT));

            return Intl.NumberFormat('fr-fr', {
                style: 'currency',
                currency: 'EUR',
            }).format(price);
        },

        ucfirst(word) {
            if (word) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
            return false;
        },
    },
};
