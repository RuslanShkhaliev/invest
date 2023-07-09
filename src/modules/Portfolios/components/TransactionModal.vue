<script
    setup
    lang="ts"
>
import ModalComponent from '@/common/components/modals/ModalComponent.vue';
import {AssetType, IAsset} from '@/modules/Asset/interface';
import {ref, unref} from 'vue';

const assetTypes = [
    {value: AssetType.STOCK, title: 'Акция'},
    {value: AssetType.CURRENCY, title: 'Валюта'},
    {value: AssetType.BOND, title: 'Облигация'},
    {value: AssetType.CUSTOM, title: 'Указать своё'},
]
const assetModel = {
    type: AssetType.CUSTOM,
    averageBuyPrice: 0,
    dividendPerShare: 0,
    exchangeRate: 0,
    faceValue: 0,
    fee: 0,
    holdings: 0,
    interest: 0,
    investmentPeriod: 0,
    maturityDate: '',
    name: '',
    paymentDate: 0,
    portfolioId: 0,
    price: 0,
    staked: 0,
    symbol: '',
    tax: 0,
    callableStatus: undefined,
    annualCouponRate: 0,
    annualPercentageRate: 0
}

const isShow = ref(false);
const asset = ref<IAsset>({...assetModel});
const form = ref()

const emit = defineEmits(['add-transaction', 'close']);

const close = () => {
    form.value.reset();
    isShow.value = false;
    emit('close');
};

const showModal = () => {
    isShow.value = true;
}

const addTransaction = () => {
    emit('add-transaction', unref(asset));
    form.value.reset();
    isShow.value = false;
}

</script>

<template>
    <ModalComponent
        v-model="isShow"
        @close="close"
    >
        <template #trigger="props">
            <VBtn
                max-width="100%"
                width="100%"
                height="64"
                variant="flat"
                class="text-none"
                color="blue"
                prepend-icon="mdi-check"
                v-bind="props"
                @click="showModal"
            >
                Добавить транзакцию
            </VBtn>
        </template>
        <template #title>
            <h5 class="text-h5">Добавление транзакции</h5>
        </template>
        <VForm ref="form">
            <VSelect
                label="Тип актива:"
                :items="assetTypes"
                item-value="value"
                item-title="title"
                variant="filled"
                v-model="asset.type"
            ></VSelect>
            <VTextField
                label="Название"
                v-model="asset.name"
                placeholder="BTC|USD"
            />
            <VTextField
                label="Цена покупки"
                v-model.number="asset.purchasePrice"
                type="number"
            />
            <VTextField
                label="Количество"
                v-model.number="asset.quantity"
                type="number"
            />
            <VTextField
                label="Комиссия за сделку"
                v-model.number="asset.brokerCommission"
                type="number"
            />
        </VForm>
        <template #actions>
            <VSpacer/>
            <VBtn
                width="140px"
                height="40"
                variant="flat"
                class="text-none"
                color="blue"
                @click="addTransaction"
            >
                Добавить
            </VBtn>
        </template>
    </ModalComponent>
</template>


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
