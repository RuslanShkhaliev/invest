// Created by Ruslan on 02.07.2023 (morehome@mail.ru)
<script
    setup
    lang="ts"
>

import StatisticBlock from '@/common/components/StatisticBlock.vue';
import { useAppServices } from '@/common/composables';
import TransactionModal from '@/modules/Portfolios/components/TransactionModal.vue';
import { IPortfolioModel } from '@/modules/Portfolios/interface';
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const {$portfolioService} = useAppServices();
const route = useRoute();
const portfolio = ref<IPortfolioModel | null>(null);

watchEffect(async () => {
    portfolio.value = await $portfolioService.getPortfolioByIdAsync(route.params.id as string);

});

const addTransaction = async (assetModel) => {

}

</script>

<template>
    <VContainer class="portfolio-page" v-if="portfolio">
        <VToolbar
            class="border-b mb-8"
            color="transparent"
        >
            <VToolbarTitle>{{ portfolio.name }}</VToolbarTitle>
            {{ portfolio }}
        </VToolbar>
        <StatisticBlock class="mb-8">
            <VRow>
                <VCol>
                    <VCardItem
                        color="transparent"
                        max-width="max-content"
                    >
                        <VCardSubtitle class="text-white">Баланс</VCardSubtitle>
                        <VCardTitle class="text-white">{{portfolio.balance}}</VCardTitle>
                    </VCardItem>
                </VCol>
                <VCol>
                    <VCardItem
                        color="transparent"
                        max-width="max-content"
                    >
                        <VCardSubtitle class="text-white">Доход за сегодня</VCardSubtitle>
                        <VCardTitle class="text-green font-weight-bold">{{portfolio.profit}} (0,11%)</VCardTitle>
                    </VCardItem>
                </VCol>
                <VCol>
                    <VCardItem
                        color="transparent"
                        max-width="max-content"
                    >
                        <VCardSubtitle class="text-white">Лучший актив</VCardSubtitle>
                        <VCardTitle class="text-green font-weight-bold">{{portfolio.profit}} (0,11%)</VCardTitle>
                    </VCardItem>
                </VCol>
            </VRow>
        </StatisticBlock>

        <VRow class="justify-end">
            <VCol cols="auto">
                <TransactionModal @add-transaction="addTransaction"/>
            </VCol>
        </VRow>

        <div>
            <VCard
                flat
                color="transparent"
            >
                <VCardTitle class="mb-2">Акции</VCardTitle>
                <VTable class="table bg-transparent border">
                    <thead>
                    <tr>
                        <th class="text-left">
                            <div class="font-weight-bold">Название</div>
                        </th>
                        <th class="text-right">
                            <div class="font-weight-bold">Цена</div>
                        </th>
                        <th class="text-right">
                            <div class="font-weight-bold">Стоимость</div>
                        </th>
                        <th class="text-right">
                            <div class="font-weight-bold">За все время</div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="item in 2"
                        :key="item"
                    >
                        <td>
                            <RouterLink to="/">
                                <div class="d-flex align-center pt-2 pb-2">
                                    <VAvatar
                                        variant="tonal"
                                        color="#333"
                                        size="48"
                                        class="mr-4"
                                    >

                                    </VAvatar>
                                    <div>
                                        <div class="mb-1">Polymetal {{ item }}</div>
                                        <div class="text-grey-darken-1 text-body-2">POLY</div>
                                    </div>
                                </div>
                            </RouterLink>
                        </td>
                        <td class="text-right">{{ item }}</td>
                        <td class="text-right">{{ item }}</td>
                        <td class="text-right">{{ item }}</td>
                    </tr>
                    </tbody>
                </VTable>
            </VCard>

            <VCard
                flat
                color="transparent"
            >
                <VCardTitle class="mb-2">Валюта</VCardTitle>
                <VTable class="table bg-transparent border">
                    <thead>
                    <tr>
                        <th class="text-left">
                            <div class="font-weight-bold">Название</div>
                        </th>
                        <th class="text-right">
                            <div class="font-weight-bold">Цена</div>
                        </th>
                        <th class="text-right">
                            <div class="font-weight-bold">Стоимость</div>
                        </th>
                        <th class="text-right">
                            <div class="font-weight-bold">За все время</div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="item in 2"
                        :key="item"
                    >
                        <td>
                            <RouterLink to="/">
                                <div class="d-flex align-center pt-2 pb-2">
                                    <VAvatar
                                        variant="tonal"
                                        color="#333"
                                        size="48"
                                        class="mr-4"
                                    >

                                    </VAvatar>
                                    <div>
                                        <div class="mb-1">Polymetal {{ item }}</div>
                                        <div class="text-grey-darken-1 text-body-2">POLY</div>
                                    </div>
                                </div>
                            </RouterLink>
                        </td>
                        <td class="text-right">{{ item }}</td>
                        <td class="text-right">{{ item }}</td>
                        <td class="text-right">{{ item }}</td>
                    </tr>
                    </tbody>
                </VTable>
            </VCard>

            <VCard
                flat
                color="transparent"
            >
                <VCardTitle class="mb-2">Криптовалюта</VCardTitle>
                <VTable class="table bg-transparent border">
                    <thead>
                    <tr>
                        <th class="text-left">
                            <div class="font-weight-bold">Название</div>
                        </th>
                        <th class="text-right">
                            <div class="font-weight-bold">Цена</div>
                        </th>
                        <th class="text-right">
                            <div class="font-weight-bold">Стоимость</div>
                        </th>
                        <th class="text-right">
                            <div class="font-weight-bold">За все время</div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="item in 2"
                        :key="item"
                    >
                        <td>
                            <RouterLink to="/">
                                <div class="d-flex align-center pt-2 pb-2">
                                    <VAvatar
                                        variant="tonal"
                                        color="#333"
                                        size="48"
                                        class="mr-4"
                                    >

                                    </VAvatar>
                                    <div>
                                        <div class="mb-1">Polymetal {{ item }}</div>
                                        <div class="text-grey-darken-1 text-body-2">POLY</div>
                                    </div>
                                </div>
                            </RouterLink>
                        </td>
                        <td class="text-right">{{ item }}</td>
                        <td class="text-right">{{ item }}</td>
                        <td class="text-right">{{ item }}</td>
                    </tr>
                    </tbody>
                </VTable>
            </VCard>

            <VCard
                flat
                color="transparent"
            >
                <VCardTitle class="mb-2">Облигации</VCardTitle>
                <VTable class="table bg-transparent border">
                    <thead>
                    <tr>
                        <th class="text-left">
                            <div class="font-weight-bold">Название</div>
                        </th>
                        <th class="text-right">
                            <div class="font-weight-bold">Цена</div>
                        </th>
                        <th class="text-right">
                            <div class="font-weight-bold">Стоимость</div>
                        </th>
                        <th class="text-right">
                            <div class="font-weight-bold">За все время</div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="item in 2"
                        :key="item"
                    >
                        <td>
                            <RouterLink to="/">
                                <div class="d-flex align-center pt-2 pb-2">
                                    <VAvatar
                                        variant="tonal"
                                        color="#333"
                                        size="48"
                                        class="mr-4"
                                    >

                                    </VAvatar>
                                    <div>
                                        <div class="mb-1">Polymetal {{ item }}</div>
                                        <div class="text-grey-darken-1 text-body-2">POLY</div>
                                    </div>
                                </div>
                            </RouterLink>
                        </td>
                        <td class="text-right">{{ item }}</td>
                        <td class="text-right">{{ item }}</td>
                        <td class="text-right">{{ item }}</td>
                    </tr>
                    </tbody>
                </VTable>
            </VCard>
        </div>
    </VContainer>
</template>

<style
    lang="scss"
    scoped
>
.portfolio-page {
    max-width: 824px;
}

.table {
    border-radius: 24px;
}
</style>
