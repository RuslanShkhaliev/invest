<script
    setup
    lang="ts"
>

import Grid from './containers/Grid.vue'
import GridItem from './containers/GridItem.vue'
import ModalCreatePortfolio from './modals/CreatingPortfolio.vue'</script>

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
