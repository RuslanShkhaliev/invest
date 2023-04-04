<template>
    <Modal title="Create asset" :is-active="show" @close="close">
        <form @submit.prevent="addAsset">
            <div class="form-group">
                <label for="asset-type">Тип актива:</label>
                <select
                    v-model="assetType"
                    id="asset-type"
                    required
                >
                    <option :value="AssetType.DEFAULT">
                        указать самостоятельно
                    </option>
                    <option :value="AssetType.STOCK">акция</option>
                    <option :value="AssetType.BOND">облигация</option>
                    <option :value="AssetType.CURRENCY">валюта</option>
                </select>
            </div>

            <div class="form-group" v-if="assetType === AssetType.DEFAULT">
                <label for="custom-asset-type">Указать тип актива:</label>
                <input
                    v-model="asset.type"
                    type="text"
                    id="custom-asset-type"
                >
            </div>

            <div class="form-group">
                <label for="asset-name">Название:</label>
                <input
                    v-model="asset.name"
                    type="text"
                    id="asset-name"
                    required
                >
            </div>

            <div class="form-group">
                <label for="asset-purchase-price">Цена покупки:</label>
                <input
                    v-model.number="asset.purchasePrice"
                    id="asset-purchase-price"
                    type="number"
                    step="0.5"
                    required
                >
            </div>

            <div class="form-group">
                <label for="asset-quantity">Количество:</label>
                <input
                    v-model.number="asset.quantity"
                    id="asset-quantity"
                    type="number"
                    step="0.5"
                    required
                >
            </div>

            <div class="form-group">
                <label for="asset-broker-commission">Комиссия брокера:</label>
                <input
                    v-model.number="asset.brokerCommission"
                    id="asset-broker-commission"
                >
            </div>

            <div class="form-group">
                <label for="asset-tax">Налог:</label>
                <input
                    v-model.number="asset.tax"
                    id="asset-tax"
                >
            </div>

            <div class="form-group">
                <label for="asset-investment-period">Срок инвестирования (лет):</label>
                <input
                    v-model.number="asset.investmentPeriod"
                    id="asset-investment-period"
                    type="number"
                >
            </div>

            <KeepAlive>
                <div class="form-group" v-if="assetType === AssetType.STOCK">
                    <label for="asset-annual-percentage-rate">
                        Годовая процентная ставка:
                    </label>
                    <input
                        v-model.number="asset.annualPercentageRate"
                        id="asset-annual-percentage-rate"
                        type="number"
                        step="0.01"
                    >
                </div>
                <template v-else-if="assetType === AssetType.BOND">
                    <div class="form-group">
                        <label for="faceValue">
                            Номинальная стоимость:
                        </label>
                        <input
                            v-model.number="asset.annualPercentageRate"
                            id="faceValue"
                            type="number"
                            step="0.01"
                        >
                    </div><div class="form-group">
                    <label for="annualCouponRate">
                        Годовая купонная ставка:
                    </label>
                    <input
                        v-model.number="asset.annualCouponRate"
                        id="annualCouponRate"
                        type="number"
                        step="0.01"
                    >
                </div>
                    <div class="form-group">
                        <label for="maturityDate">
                            Дата погашения:
                        </label>
                        <input
                            v-model.number="asset.maturityDate"
                            id="maturityDate"
                            type="number"
                            step="0.01"
                        >
                    </div>
                </template>
                <div v-else-if="assetType === AssetType.CURRENCY"
                     class="form-group">
                    <label for="exchangeRate">
                        Обменный курс:
                    </label>
                    <input
                        v-model.number="asset.maturityDate"
                        id="exchangeRate"
                        type="number"
                        step="0.01"
                    >
                </div>
            </KeepAlive>

            <div class="form-group">
                <button type="submit">Добавить</button>
            </div>
        </form>
    </Modal>
</template>

<script
    setup
    lang="ts"
>

import Modal from '@/components/modals/Modal.vue';
import {
    AssetDefaultDto,
    AssetDto,
    BondAssetDto,
    CurrencyAssetDto,
    StockAssetDto,
} from '@/models/asset';
import {AssetType} from '@/types';
import {ref, unref, watchEffect} from 'vue';

defineProps({
    show: {
        type: Boolean,
        default: false,
    }
})

const assetModels = {
    [AssetType.DEFAULT]: AssetDefaultDto,
    [AssetType.STOCK]: StockAssetDto,
    [AssetType.BOND]: BondAssetDto,
    [AssetType.CURRENCY]: CurrencyAssetDto,
}

const assetType = ref<AssetType>(AssetType.STOCK)

const asset = ref<AssetDto>(new assetModels[unref(assetType)]())

/*watch(() => assetType.value, (newVal) => {
    asset.value = new assetModels[newVal](unref(asset))
})*/

watchEffect(() => {
    asset.value = new assetModels[unref(assetType)](unref(asset))
})

const emit = defineEmits(['add-asset', 'close'])
const reset = () => {
    asset.value = new assetModels[unref(assetType)]()
}
const close = () => {
    reset()
    emit('close')
}

function addAsset() {
    emit('add-asset', unref(asset));
    close()
}

</script>



<style
    lang="scss"
    scoped
>

form {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
}

.form-group {
    display: flex;
    label {
        padding: 0.5em;
        font-size: 1.6rem;
        white-space: nowrap;
    }
    input {
        width: 100%;
    }
    button {
        padding: 1rem;
        background-color: #d9d9d9;
    }
}
</style>
