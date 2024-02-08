<template>
    <component :is="tag" :class="['bi-col', classList]">
        <slot />
    </component>
</template>

<script>
    import { defineComponent } from '@vue-bridge/runtime';
    import {
        alignSelfValidator,
        alignSelfProps,
        breakpointProps,
        offsetProps,
        orderProps,
        classMap,
        propMap,
    } from './validators';

    export default defineComponent({
        name: 'BiCol',
        props: {
            tag: {
                type: String,
                default: 'div',
            },
            cols: {
                type: [String, Number],
                default: null,
            },
            grow: {
                type: Boolean,
                default: false,
            },
            ...breakpointProps,
            offset: {
                type: [String, Number],
                default: null,
            },
            ...offsetProps,
            order: {
                type: [String, Number],
                default: null,
            },
            ...orderProps,
            alignSelf: {
                type: String,
                default: null,
                validator: (str) => alignSelfValidator(str),
            },
            ...alignSelfProps,
        },
        emits: [],
        computed: {
            classList() {
                const classes = {};
                Object.entries(classMap).flatMap(([key, value]) => propMap[key].flatMap((prop) => {
                    const breakpoint = prop.replace(key, '').toLowerCase();
                    return {
                        [`bi-col--${value}-${this[prop]}-${breakpoint}`]: this[prop],
                    };
                })).forEach((cssClass) => {
                    Object.assign(classes, cssClass);
                });

                return {
                    ...classes,
                    [`bi-col--cols-${this.cols}`]: this.cols,
                    [`bi-col--offset-${this.offset}`]: this.offset,
                    [`bi-col--order-${this.order}`]: this.order,
                    [`bi-col--align-${this.alignSelf}`]: this.alignSelf,
                    'bi-col--grow': this.grow,
                };
            },
        },
    });
</script>

<style lang="scss">
@import "BiCol.scss";
</style>
