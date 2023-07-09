// Created by Ruslan on 07.07.2023 (morehome@mail.ru)
<script
    setup
    lang="ts"
>

import StatisticBlock from '@/common/components/StatisticBlock.vue';
import WidgetBlock from '@/common/components/WidgetBlock.vue';</script>

<template>
    <div class="dashboard w-100 pe-5 ps-5" >
        <VToolbar class="border-b" color="transparent">
            <VToolbarTitle>Брокерский счет</VToolbarTitle>
        </VToolbar>

        <div class="pt-8">
            <StatisticBlock>
                <div class="d-flex">
                    <VCardItem color="transparent" max-width="max-content">
                        <VCardSubtitle class="text-white">Баланс</VCardSubtitle>
                        <VCardTitle class="text-white">158466,39</VCardTitle>
                    </VCardItem>
                    <VSpacer/>
                    <VCardItem color="transparent" max-width="max-content">
                        <VCardSubtitle class="text-white">Доход за сегодня</VCardSubtitle>
                        <VCardTitle class="text-green font-weight-bold">+168,75₽ (0,11%)</VCardTitle>
                    </VCardItem>
                    <VSpacer/>
                </div>
            </StatisticBlock>

            <VRow class="mt-10">
                <VCol cols="12" class="mb-4">
                    <WidgetBlock title="График"></WidgetBlock>
                </VCol>
                <VCol cols="6">
                    <WidgetBlock title="Распределение" class="w-50"></WidgetBlock>
                </VCol>
                <VCol cols="6">
                    <WidgetBlock title="Последние события" class="w-50"></WidgetBlock>
                </VCol>
            </VRow>
        </div>
    </div>
</template>

<style
    lang="scss"
    scoped
>

</style>
