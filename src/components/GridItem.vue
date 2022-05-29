<script
    setup
    lang="ts"
>

defineProps({
    tag: {
        type: String,
        required: false,
        default: 'div',
    },
    col: {
        type: String,
        required: false,
        default: '',
    },
    area: {
        type: String,
        required: false,
        default: '',
    },
})

</script>

<template>
    <Component
        class="grid-item"
        :is="tag"
    >
        <slot />
    </Component>
</template>

<style
    lang="scss"
    scoped
>
.grid-item {
    grid-column: v-bind(col);
    grid-area: v-bind(area);
}
</style>
