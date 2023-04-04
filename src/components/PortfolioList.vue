<template>
    <div class="portfolio-list">
        <VCard
            elevation="6"
            :to="`/portfolio/${portfolio.id}`"
            rounded
            v-for="portfolio in portfolios"
            :key="portfolio.id"
        >
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
                    Total Value: {{ portfolio.totalValue }}
                </p>
                <p class="card-text">
                    Created at: {{portfolio.created_at}}
                </p>
            </VCardItem>
        </VCard>
    </div>
</template>

<script lang="ts">
import {usePortfolios} from '@/composables/usePortfolios';
import {defineComponent, ref} from 'vue';

export default defineComponent({
    name: 'PortfolioList',
    setup() {
        const showAddModal = ref(false);

        const {getPortfolios, addPortfolio} = usePortfolios();
        const portfolios = getPortfolios();

        console.log(getPortfolios());

        const showPortfolioModal = () => {
            showAddModal.value = true;
        };


        return {portfolios, showAddModal, showPortfolioModal, addPortfolio};
    },
});
</script>

<style scoped>
.portfolio-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    gap: 2rem;
}
</style>
