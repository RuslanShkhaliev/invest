<script
    setup
    lang="ts"
>
import {
 computed, provide, ref, unref,
} from 'vue'
import Chart from '@/components/Chart.vue'
import Flex from '@/components/Flex.vue'
import ToolsBar from '@/components/ToolsBar.vue'
import { PortfolioService } from '@/modules/portfolio/service'
import { Portfolio } from '@/modules/portfolio/service/portfolio'
import PortfolioGroup from '../components/PortfolioGroup.vue'

const { data, isFinish } = PortfolioService.getAll()
const list = computed(() => data.value?.list || [])
const portfolios = ref(list)

const updatePortfolio = (portfolio: Portfolio) => {
    portfolios.value.push(unref(portfolio))
    console.log(portfolios, 'LIST')
}
provide('updatePortfolio', updatePortfolio)
</script>

<template>
    <Flex
        wrap="nowrap"
        col-gap="10px"
    >
        <Chart />
        <Chart />
    </Flex>

    <ToolsBar />

    <template v-if="isFinish">
        <h3>{{ data?.general }}</h3>
        <PortfolioGroup
            :list="portfolios"
        />
    </template>
</template>

<style
    lang="scss"
    scoped
>

</style>
