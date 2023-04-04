<template>
    <VCard :to="`/portfolio/${portfolio.id}`" border rounded>
        <VCardItem>
            <VCardTitle>
                {{ portfolio.name }}
            </VCardTitle>
        </VCardItem>
        <VCardItem>
            <p
                class="card-text"
                v-if="portfolio?.assets?.length > 0"
            >
                Total Value: {{portfolio.totalValue}}
            </p>
            <p class="card-text">Created at: {{ portfolio.created_at }}</p>
        </VCardItem>
    </VCard>
</template>

<script lang="ts">
import type {Portfolio} from '@/interfaces';
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'PortfolioCard',
    props: {
        portfolio: {
            type: Object as () => Portfolio,
            required: true,
        },
    },
});
</script>

<style scoped>
.card {
    margin-bottom: 16px;
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}

.card-body {
    padding: 16px;
}
</style>
