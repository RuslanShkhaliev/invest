<script
    setup
    lang="ts"
>
import { useRequest } from '../../../services';
import PortfolioGroup from '../components/PortfolioGroup.vue';

const { fetchInitData } = useRequest();
const {
    data,
    isFinished,
} = fetchInitData();
console.log(data, 'data');
</script>

<template>
    <template v-if="isFinished">
        <h3>{{ data?.general }}</h3>
        <PortfolioGroup
            :list="[...data?.list,...data?.list,...data?.list,...data?.list]"
        />
    </template>
</template>

<style
    lang="scss"
    scoped
>

</style>
