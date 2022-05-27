<template>
    <Flex
        tag="header"
        class="header"
    >
        <Flex
            tag="ul"
            class="menu-list"
            col-gap="100px"
            align="center"
            justify="space-between"
        >
            <li
                class="menu-list__item"
                v-for="(item, index) in menu"
                :key="index"
            >
                {{ item }}
            </li>
        </Flex>
    </Flex>
</template>

<script setup>
import Flex from './Flex.vue';

const menu = ['One', 'Two', 'Three', 'Four'];

</script>

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
