<script setup>
import Auth from '../Auth.vue'
import Flex from '../containers/Flex.vue'</script>

<template>
    <Flex
        tag="header"
        class="header"
    >
        <Auth />
    </Flex>
</template>

<style
    lang="scss"
    scoped
>
$BG_COLOR: var(--bg-color-regular);
$TEXT_COLOR: var(--text-color-regular);
.header {
    padding: 15px 20px;
    height: 60px;
    background-color: $BG_COLOR;
    color: $TEXT_COLOR;
}

.menu-list {

}
</style>
