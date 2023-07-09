<script
    setup
    lang="ts"
>

import Header from '@/common/components/layout/Header.vue';</script>

<template>
    <VLayout full-height class="flex-column">
        <Header />
        <VMain class="main">
            <VContainer fluid class="h-100">
                <RouterView />
            </VContainer>
        </VMain>
    </VLayout>
</template>
<style lang="scss" scoped>
.main {
    background-color: #f6f7f8;
}
</style>
