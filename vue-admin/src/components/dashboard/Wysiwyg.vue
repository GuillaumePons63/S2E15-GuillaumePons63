<template>
    <input id="trix" type="hidden" :name="name" :value="value" />

    <trix-editor
        ref="trix"
        input="trix"
        @trix-change="change"
        :placeholder="placeholder"
        :name="name"
    >
    </trix-editor>
</template>

<script>
import Trix from 'trix';

export default {
    props: ['name', 'placeholder'],
    components: { Trix },
    data() {
        return {
            value: '',
            about: '',
            id: '',
        };
    },

    watch: {
        value(val) {
            if (val === '') {
                this.$refs.trix.value = '';
            }
        },
    },

    methods: {
        change(event) {
            this.$emit('changing', event);
            this.value = this.$refs.trix.value;
        },
    },
};
</script>

<style>
@import 'trix/dist/trix.css';
</style>
