<script
    setup
    lang="ts"
>

import { useRoute } from 'vue-router';
import PortfolioGroup from '../components/PortfolioGroup.vue';

const { params } = useRoute();
</script>

<template>
    {{ params.id }}
    <PortfolioGroup

    />
</template>

<style
    lang="scss"
    scoped
>

</style>
