// Created by Ruslan on 02.07.2023 (morehome@mail.ru)
<script
    setup
    lang="ts"
>

import {useAppServices} from '@/common/composables';
import Dashboard from '@/modules/Portfolios/components/Dashboard.vue';
import {onBeforeMount} from 'vue';
import PortfolioSidebar from './components/PortfolioSidebar.vue';
import {usePortfolioStore} from './store';

const {$portfolioService} = useAppServices();
const {getPortfoliosList} = usePortfolioStore();

onBeforeMount(async () => {
    try {
        await $portfolioService.getPortfolioListAsync();
    } catch (err) {
        console.log(err);
    }

});


</script>

<template>
    <VContainer class="h-100 d-flex pt-6">
        <PortfolioSidebar
            class="pe-5 ps-5 pt-4 flex-shrink-0"
            :list="getPortfoliosList"
        />
        <Dashboard />
    </VContainer>
</template>

<style
    lang="scss"
    scoped
>

</style>
