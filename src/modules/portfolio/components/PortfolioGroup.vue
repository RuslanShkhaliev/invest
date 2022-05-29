<script
    setup
    lang="ts"
>

import { PropType } from 'vue'
import Grid from '@/components/Grid.vue'
import GridItem from '@/components/GridItem.vue'
import { Portfolio } from '@/modules/portfolio/service/portfolio'
import PortfolioWidget from './PortfolioWidget.vue'

defineProps({
    list: {
        type: Array as PropType<Portfolio[]>,
        required: true,
        default: () => [],
    },
})

</script>

<template>
    <Grid
        row-gap="2rem"
        col-gap="2rem"
    >
        <GridItem
            v-for="card in list"
            :key="card.id"
        >
            <PortfolioWidget v-bind="card" />
        </GridItem>
    </Grid>
</template>

<style
    lang="scss"
    scoped
>

</style>
