<script
    setup
    lang="ts"
>

type Props = {
    name?: string
    params?: Record<string, string>
}

const props = withDefaults(defineProps<Props>(), {});
</script>
<template>
    <RouterLink
        :to="props"
        class="wrap"
    >
        <slot />
    </RouterLink>
</template>

<style
    lang="scss"
    scoped
>
</style>
