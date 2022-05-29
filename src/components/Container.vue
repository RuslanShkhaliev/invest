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
})
</script>
<template>
    <Component
        :is="tag"
        class="container"
    >
        <slot />
    </Component>
</template>

<style
    lang="scss"
    scoped
>
$CONTAINER_WIDTH: 131rem;
.container {
    width: 100%;
    min-height: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 1310px) {
        width: 131rem;
        padding-left: 5.5rem;
        padding-right: 5.5rem;
    }
}
</style>
