<script
    setup
    lang="ts"
>

import { PropType } from 'vue';
import { Portfolio } from '../../../services';
import Flex from '../../shared/Flex.vue';
import PortfolioWidget from './PortfolioWidget.vue';

defineProps({
    list: {
        type: Array as PropType<Portfolio[]>,
        required: true,
        default: () => [],
    },
});

</script>

<template>
    <Flex
        row-gap="2rem"
        col-gap="2rem"
    >
        <PortfolioWidget
            v-for="card in list"
            :key="card.id"
            v-bind="card"
        />
    </Flex>
</template>

<style
    lang="scss"
    scoped
>

</style>
