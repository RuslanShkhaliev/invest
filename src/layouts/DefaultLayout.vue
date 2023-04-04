<script
    setup
    lang="ts"
>

import Header from '@/components/layout/Header.vue';</script>

<template>
    <VLayout full-height class="flex-column">
        <Header />
        <VMain>
            <VContainer>
                <RouterView />
            </VContainer>
        </VMain>
    </VLayout>
</template>
