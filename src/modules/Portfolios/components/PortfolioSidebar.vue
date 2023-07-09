// Created by Ruslan on 02.07.2023 (morehome@mail.ru)
<script
    setup
    lang="ts"
>

import {useAppServices} from '@/common/composables';
import CreatePortfolio from '@/modules/Portfolios/components/CreatePortfolioModal.vue';
import {IPortfolioPreview} from '@/modules/Portfolios/interface';
import {useRouter} from 'vue-router';

defineProps<{
    list: IPortfolioPreview[]
}>()

const {$portfolioService} = useAppServices()
const router = useRouter()

const createPortfolio = async (portfolio: IPortfolioPreview) => {
    const newPortfolio = await $portfolioService.createPortfolioAsync(portfolio)
    await router.push({name: 'portfolios', params: {id: newPortfolio.id}})
}

</script>

<template>
    <VCard
        flat
        elevation="0"
        class="bg-transparent"
    >
        <VCardTitle>Портфели</VCardTitle>
        <VList
            lines="three"
            class="bg-transparent  pa-0 border-t"
        >

            <VListItem
                v-for="portfolio in list"
                :key="portfolio.id"
                density="compact"
                class="d-flex border-b-sm"
                min-width="240px"
                :to="{name: 'portfolios', params: {id: portfolio.id}}"

            >
                <template v-slot:prepend>
                    <VAvatar
                        color="grey-darken-1"
                        size="32"
                        theme="dark"
                    >
                        <VIcon
                            color="white"
                        >mdi-folder
                        </VIcon>
                    </VAvatar>
                </template>
                <VListItemTitle>{{ portfolio.name ?? 'Unnamed'  }}</VListItemTitle>
                <VListItemSubtitle>${{portfolio.balance}}</VListItemSubtitle>
                <VListItemSubtitle>+{{portfolio.profit}} (11,91%)</VListItemSubtitle>
            </VListItem>
        </VList>
        <VCardActions class="pa-0">
            <CreatePortfolio @createPortfolio="createPortfolio"/>
        </VCardActions>
    </VCard>
</template>

<style
    lang="scss"
    scoped
>

</style>
