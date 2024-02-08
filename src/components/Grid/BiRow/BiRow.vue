<template>
    <component :is="tag" :class="['bi-row', classList]">
        <slot />
    </component>
</template>

<script>
    import { defineComponent } from '@vue-bridge/runtime';
    import {
        alignContentValidator,
        alignContentProps,
        alignValidator,
        alignProps,
        directionValidator,
        directionProps,
        justifyValidator,
        justifyProps,
        classMap,
        propMap,
    } from './validators';

    export default defineComponent({
        name: 'BiRow',
        props: {
            tag: {
                type: String,
                default: 'div',
            },
            noGutters: {
                type: Boolean,
                default: false,
            },
            fluid: {
                type: Boolean,
                default: true,
            },
            direction: {
                type: String,
                default: null,
                validator: (str) => directionValidator(str),
            },
            ...directionProps,
            justify: {
                type: String,
                default: null,
                validator: (str) => justifyValidator(str),
            },
            ...justifyProps,
            align: {
                type: String,
                default: null,
                validator: (str) => alignValidator(str),
            },
            ...alignProps,
            alignContent: {
                type: String,
                default: null,
                validator: (str) => alignContentValidator(str),
            },
            ...alignContentProps,
        },
        emits: [],
        computed: {
            classList() {
                const classes = {};
                Object.entries(classMap).flatMap(([key, value]) => propMap[key].flatMap((prop) => {
                    const breakpoint = prop.replace(key, '').toLowerCase();
                    return {
                        [`bi-row--${value}-${this[prop]}-${breakpoint}`]: this[prop],
                    };
                })).forEach((cssClass) => {
                    Object.assign(classes, cssClass);
                });

                return {
                    'bi-row--no-gutters': this.noGutters,
                    'bi-row--fluid': this.fluid,
                    ...classes,
                    [`bi-row--justify-${this.justify}`]: this.justify,
                    [`bi-row--align-${this.align}`]: this.align,
                    [`bi-row--align-content-${this.alignContent}`]: this.alignContent,
                    [`bi-row--direction-${this.direction}`]: this.direction,
                };
            },
        },
    });
</script>

<style lang="scss">
  @import "BiRow.scss";
</style>
