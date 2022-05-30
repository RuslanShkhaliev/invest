<script
    setup
    lang="ts"
>
import { PropType } from 'vue'

interface Props {
    tag: 'div' | 'ul';
    justify?: 'baseline' | 'stretch' | 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    align?: 'baseline' | 'stretch' | 'start' | 'end' | 'center' | 'auto' | 'first baseline' | 'last baseline' | 'normal';
    alignC?: 'baseline' | 'stretch' | 'start' | 'end' | 'center' | 'auto' | 'first baseline' | 'last baseline' | 'normal';
    justifyC?: 'baseline' | 'stretch' | 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    flow?: 'row' | 'column' | 'row dense' | 'column dense' | 'dense';
    gap?: string;
    rowGap: string;
    colGap: string;
}

defineProps({
    tag: {
        type: String as PropType<Props['tag']>,
        required: false,
        default: 'div',
    },
    justify: {
        type: String as PropType<Props['justify']>,
        required: false,
        default: '',
    },
    justifyC: {
        type: String as PropType<Props['justifyC']>,
        required: false,
        default: '',
    },
    align: {
        type: String as PropType<Props['align']>,
        required: false,
        default: '',
    },
    alignC: {
        type: String as PropType<Props['alignC']>,
        required: false,
        default: '',
    },
    flow: {
        type: String as PropType<Props['flow']>,
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
    repeat: {
        type: String,
        required: false,
        default: '',
    },

})

</script>

<template>
    <Component
        :is="tag"
        class="grid"
    >
        <slot />
    </Component>
</template>

<style
    scoped
    lang="scss"
>
:global(.grid) {
    display: grid;
    width: 100%;
    justify-content: v-bind('justifyC');
    align-content: v-bind('alignC');
    justify-items: v-bind('justify');
    align-items: v-bind('align');
    row-gap: v-bind('rowGap');
    column-gap: v-bind('colGap');
}
</style>
