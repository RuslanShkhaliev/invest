// Created by Ruslan on 27.06.2023 (morehome@mail.ru)
<script
    setup
    lang="ts"
>
const props = defineProps({
    logo: String,
    name: String,
    value: String,
})
</script>

<template>
    <div class="d-flex align-center">
        <img class="portfolio-img mr-2" v-if="logo"/>
        <div v-else class="portfolio-img portfolio-img-placeholder mr-2"></div>
        <div>
            <p class="portfolio-name">{{name ? name : 'unnamed'}}</p>
            <p class="portfolio-value text-grey-darken-1">$605,904.82</p>
        </div>
    </div>
</template>

<style
    lang="scss"
    scoped
>
.portfolio-img {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background-color: #0084ff;
    &-placeholder {

    }
}

.portfolio-name {
    font-size: 14px;
    line-height: 24px;
    font-weight: bold;
}
.portfolio-value {
    font-size: 12px;
    line-height: 24px;
}
</style>
