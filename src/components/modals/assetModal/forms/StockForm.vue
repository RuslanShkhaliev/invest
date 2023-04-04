<template>
    <form @submit.prevent="handleSubmit">
        <label>
            Название:
            <input v-model="stock.name" required />
        </label>
        <label>
            Количество:
            <input type="number" v-model="stock.quantity" required />
        </label>
        <label>
            Цена покупки:
            <input type="number" step="0.01" v-model="stock.purchasePrice"
                   required />
        </label>
        <label>
            Комиссия брокера:
            <input type="number" step="0.01" v-model="stock.brokerCommission"
                   required />
        </label>
        <label>
            Налог:
            <input type="number" step="0.01" v-model="stock.tax" required />
        </label>
        <label>
            Годовая процентная ставка:
            <input type="number" step="0.01"
                   v-model="stock.annualPercentageRate"
                   required />
        </label>
        <label>
            Срок инвестирования (лет):
            <input type="number" v-model="stock.investmentPeriod" required />
        </label>
        <button type="submit">Добавить акцию</button>
    </form>
</template>

<script setup lang="ts">
import {StockAssetDto} from '@/models/asset/StockAsset.dto';
import {reactive} from 'vue';

const emit = defineEmits<{
    (e: 'addStock', stock: StockAssetDto): StockAssetDto
}>()

const stock = reactive<StockAssetDto>(new StockAssetDto())

const handleSubmit = () => {
    emit("addStock", stock);
};

</script>
