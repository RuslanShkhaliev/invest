// Created by Ruslan on 01.07.2023 (morehome@mail.ru)
<script
    setup
    lang="ts"
>
import {computed, reactive, ref, unref, watch} from 'vue';

const state = reactive({
    initialAmount: 350000, // первоначальный взнос (например 10000 рублей)
    regularDeposits: 30000,
    // регулярные пополнения (раз в месяц, например 10000 рублей)
    interestRate: 18, // процентная ставка (например 12%)
    interestPaymentPeriod: 6,
    // время через которое будут начислены проценты (в месяцах, например через 6 месяцев)
    depositTerm: 6, // срок вклада (в месяцах, например 120 месяцев)
});



const amount = ref(0)
const calc = () => {
    let currentValue = state.initialAmount;

    const paymentAmount = state.depositTerm / state.interestPaymentPeriod

    const regularDeposits = (state.regularDeposits *
        state.interestPaymentPeriod)

    const coefficient = 1 + state.interestRate / 100

    for (let i = 1; i <= paymentAmount; i++) {
        if (regularDeposits) {
            currentValue += regularDeposits
            if (i === 1) {
                currentValue -= state.regularDeposits
            }
        }
        currentValue *= coefficient
    }

    return currentValue
}


watch(state, () => {
    amount.value = calc()
}, {
    immediate: true
})




const interestProfit = computed(() => unref(amount) * state.interestRate /
    100);

const monthlyProfit = computed(() => unref(interestProfit) / 365 * 31)

console.log(new Date().getMonth())

</script>

<template>
    <VCard>
        <VCardItem>
            <VTextField
                label="Первоначальный взнос"
                v-modelName.number="state.initialAmount"
            />
            <VTextField
                label="Регулярные пополнения"
                v-modelName.number="state.regularDeposits"
            />
            <VTextField
                label="Процентная ставка"
                v-modelName.number="state.interestRate"
            />
            <VTextField
                label="Период начисления"
                v-modelName.number="state.interestPaymentPeriod"
            />
            <VTextField
                label="Срок вклада"
                v-modelName.number="state.depositTerm"
            />
            <VTextField
                label="Конечная сумма"
                readonly
                :modelName-value="amount"
            />
            <VTextField
                label="Прибыль от процентов"
                readonly
                :modelName-value="interestProfit"
            />
            <VTextField
                label="Прибыль за месяц"
                readonly
                :modelName-value="monthlyProfit"
            />
        </VCardItem>
    </VCard>
</template>

<style
    lang="scss"
    scoped
>

</style>
