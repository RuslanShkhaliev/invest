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
$BG_COLOR: var(--bg-color-regular);
$TEXT_COLOR: var(--text-color-regular);
.wrap {
    background-color: $BG_COLOR;
    color: unset;
    //color: $TEXT_COLOR;
    padding: 1.6rem;
    border-radius: 8px;
    filter: drop-shadow(0px 1px 2px rgb(128, 138, 157)) drop-shadow(0px 8px 32px #808a9d3d);
    white-space: nowrap;
}
</style>
