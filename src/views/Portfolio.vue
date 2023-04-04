<template>
    <div class="container">
        <div class="header">
            <h2>{{ portfolio.name }}</h2>
            <button
                class="add-button"
                @click="showAddAssetModal = true"
            >
                +
            </button>
        </div>
        <VList >
            <VListItem
                v-for="asset in assets"
                :key="asset.id"
            >
                <AssetCard :asset="asset"/>
            </VListItem>
        </VList>
        <AddAssetModal
            :show="showAddAssetModal"
            @close="showAddAssetModal = false"
            @add-asset="addAsset"
        />
    </div>
</template>

<script setup>
import AssetCard from '@/components/Cards/AssetCard.vue';
import AddAssetModal from '@/components/modals/assetModal/AddAssetModal.vue';
import {usePortfolios} from '@/composables/usePortfolios';
import {computed, ref} from 'vue';
import {useRoute} from 'vue-router';

const showAddAssetModal = ref(false);
const {getPortfolio} = usePortfolios();
const route = useRoute();
const portfolio = getPortfolio(route.params.id);
const assets = computed(() => portfolio.assets);

function addAsset(asset) {
    portfolio.assets.push(asset);
    showAddAssetModal.value = false;
}
</script>

<style scoped>
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.add-button {
    background-color: #0084ff;
    border: none;
    color: #fff;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.add-button:hover {
    background-color: #005fbf;
}

.asset-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
}
</style>
