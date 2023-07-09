// Created by Ruslan on 02.07.2023 (morehome@mail.ru)
<script
    setup
    lang="ts"
>

</script>

<template>
    <VCard class="statistic-block pa-4" min-height="100">
        <slot/>
    </VCard>
</template>

<style
    lang="scss"
    scoped
>
.statistic-block {
    background-image: linear-gradient(225deg,#2f2f3a,#59595a);
    border-radius: 24px;
}
</style>
