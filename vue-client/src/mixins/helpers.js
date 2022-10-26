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
      return this.addTva(this.convertToEuro(priceHT)).toFixed(2);
    },

    ucfirst(word) {
      if (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return false;
    },
  },
};
