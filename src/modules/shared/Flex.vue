<script
    setup
    lang="ts"
>
// interface GridProps {
// eslint-disable-next-line max-len
//     justify?: 'baseline' | 'stretch' | 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
//     align?: 'baseline' | 'stretch' | 'start' | 'end' | 'center' | 'auto' | 'first baseline' | 'last baseline' | 'normal';
//     alignC?: 'baseline' | 'stretch' | 'start' | 'end' | 'center' | 'auto' | 'first baseline' | 'last baseline' | 'normal';
//     justifyC?: 'baseline' | 'stretch' | 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
//     flow?: 'row' | 'column' | 'row dense' | 'column dense' | 'dense';
//     gap?: string;
//     rowGap?: string;
//     columnGap?: string;
// }

import { PropType } from 'vue';

interface Props {
    tag: 'div' | 'ul';
    direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    justify: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    align: 'baseline' | 'stretch' | 'flex-start' | 'flex-end' | 'center';
    wrap: 'nowrap' | 'wrap' | 'wrap-reverse';
    gap: string;
    rowGap: string;
    colGap: string;
}

defineProps({
    tag: {
        type: String as PropType<Props['tag']>,
        required: false,
        default: 'div',
    },
    direction: {
        type: String as PropType<Props['direction']>,
        required: false,
        default: '',
    },
    justify: {
        type: String as PropType<Props['justify']>,
        required: false,
        default: '',
    },
    align: {
        type: String as PropType<Props['align']>,
        required: false,
        default: '',
    },
    wrap: {
        type: String as PropType<Props['wrap']>,
        required: false,
        default: 'wrap',
    },
    gap: {
        type: String as PropType<Props['gap']>,
        required: false,
        default: '',
    },
    rowGap: {
        type: String as PropType<Props['rowGap']>,
        required: false,
        default: '',
    },
    colGap: {
        type: String as PropType<Props['colGap']>,
        required: false,
        default: '',
    },
});

</script>

<template>
    <Component
        :is="tag"
        class="flex"
    >
        <slot />
    </Component>
</template>

<style
    scoped
    lang="scss"
>
:global(.flex) {
    display: flex;
    width: 100%;
    flex-direction: v-bind('direction');
    justify-content: v-bind('justify');
    align-items: v-bind('align');
    flex-wrap: v-bind('wrap');
    row-gap: v-bind('rowGap');
    column-gap: v-bind('colGap');
}
</style>
