<template>
    <VCard border :to="`/asset/${asset.id}`">
        <VCardTitle>{{asset.name}}</VCardTitle>
        <VCardItem>
            Тип актива: {{ asset.type }}
        </VCardItem>
        <VCardItem class="asset-type">Тип актива: {{ asset.type }}</VCardItem>
        <VCardItem class="asset-purchase-price">
            Стоимость покупки: {{asset.purchasePrice }}
        </VCardItem>
        <VCardItem class="asset-quantity">
            Количество: {{ asset.quantity}}
        </VCardItem>
        <VCardItem class="asset-apr">{{ asset.annualPercentageRate }}</VCardItem>
        <VCardItem class="asset-broker-commission">
            коммисия брокера: {{asset.brokerCommission}}
        </VCardItem>
        <VCardItem class="asset-tax">налог: {{ asset.tax }}</VCardItem>
        <VCardItem class="asset-investment-period">
            период вклада: {{asset.investmentPeriod}}
        </VCardItem>
    </VCard>
</template>

<script lang="ts">
import type {Asset} from '@/interfaces';
import {defineComponent} from 'vue';

export default defineComponent({
    props: {
        asset: {
            type: Object as () => Asset,
            required: true,
        },
    },
});
</script>

<style scoped>
.asset-card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 16px;
    margin-bottom: 16px;
}

.asset-name {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
}

.asset-type {
    font-size: 14px;
    margin-bottom: 8px;
}

.asset-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.asset-purchase-price,
.asset-quantity,
.asset-apr,
.asset-broker-commission,
.asset-tax,
.asset-investment-period,
.asset-created-at,
.asset-updated-at {
    font-size: 14px;
}
</style>
