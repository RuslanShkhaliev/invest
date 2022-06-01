<script
    setup
    lang="ts"
>
import {
    computed,
    PropType,
} from 'vue'

interface Props {
    direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    justify: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    align: 'baseline' | 'stretch' | 'flex-start' | 'flex-end' | 'center';
    wrap: 'nowrap' | 'wrap' | 'wrap-reverse';
    self: 'baseline' | 'stretch' | 'flex-start' | 'flex-end' | 'center';
    fit: 'fill' | 'contain'
}

const props = defineProps({
    tag: {
        type: String,
        required: false,
        default: 'div',
    },
    direction: {
        type: String as PropType<Props['direction']>,
        required: false,
        default: 'row',
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
    self: {
        type: String as PropType<Props['self']>,
        required: false,
        default: '',
    },
    wrap: {
        type: String as PropType<Props['wrap']>,
        required: false,
        default: 'wrap',
    },
    gap: {
        type: String,
        required: false,
        default: '',
    },
    rowGap: {
        type: String,
        required: false,
        default: '',
    },
    colGap: {
        type: String,
        required: false,
        default: '',
    },
    fit: {
        type: String as PropType<Props['fit']>,
        required: false,
        default: 'fill',
    },
    inline: {
        type: Boolean,
        required: false,
        default: false,
    },
})

const fits = {
    fill: '100%',
    contain: 'auto',
}

const flexType = computed(() => (props.inline ? 'inline-flex' : 'flex'))
const width = computed(() => fits[props.fit])
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
    display: v-bind(flexType);
    width: v-bind(width);
    flex-direction: v-bind(direction);
    justify-content: v-bind(justify);
    align-items: v-bind(align);
    align-self: v-bind(self);
    flex-wrap: v-bind(wrap);
    row-gap: v-bind(rowGap);
    column-gap: v-bind(colGap);
    object-fit: v-bind(fit);
}
</style>
