<script
    setup
    lang="ts"
>

import ModalCreatePortfolio from '../modules/portfolio/modals/ModalCreatePortfolio.vue'
import Grid from './Grid.vue'
import GridItem from './GridItem.vue'</script>

<template>
    <Grid>
        <GridItem
            area="1 / 5"
            span="4"
        >
            <ModalCreatePortfolio />
        </GridItem>
    </Grid>
</template>

<style
    lang="scss"
    scoped
>

</style>
