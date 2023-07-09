<script
    setup
    lang="ts"
>

</script>

<template>
    <div class="wrapper">
        <VCard
            class="header-block"
            flat
            rounded
            elevation="0"
        >
            <div class="d-flex justify-space-between">
                <VCardTitle class="text-white">Name Name</VCardTitle>
                <VBtn
                    class="ms-2"
                    icon="mdi-star"
                />
            </div>
            <div class="d-flex justify-space-between">
                <VCardItem >
                    <VRow class="d-flex" dense>
                        <VCol>
                            <div class="details text-white">
                                <div>Доходность</div>
                                <div>69.95%</div>
                            </div>
                        </VCol>
                        <VCol>
                            <div class="details text-white">
                                <div>Доходность</div>
                                <div>69.95%</div>
                            </div>
                        </VCol>
                    </VRow>
                </VCardItem>
                <VAvatar
                    class="ma-3"
                    size="125"
                    rounded="0"
                >
                    <VImg
                        src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"/>
                </VAvatar>
            </div>
        </VCard>

        <div class="info-block">
            <h3>В портфеле</h3>
            <VCard class="info-card" elevation="0">
                <VCardTitle>Брокерский счет</VCardTitle>

                <VCardItem>
                    <VRow dense>
                        <VCol>
                            <div>Количество</div>
                            <div>40 шт.</div>
                        </VCol>
                        <VCol>
                            <div>Стоимость бумаг</div>
                            <div>12045</div>
                        </VCol>
                    </VRow>
                    <VRow dense>
                        <VCol>
                            <div>Цена за бумагу</div>
                            <div>170,12 -> 166,86</div>
                        </VCol>
                    </VRow>
                </VCardItem>
            </VCard>
        </div>
    </div>
</template>

<style
    lang="scss"
    scoped
>
.wrapper {
    max-width: 66.6%;
}

.header-block {
    width: 100%;
    min-height: 184px;
    border-radius: 24px;
    padding: 20px 15px 30px;
    background-color: green;
}

.info {
    &-card {
        padding: 20px 24px;
        border-radius: 24px;
        background-color: #f6f7f8;
    }
}
</style>
