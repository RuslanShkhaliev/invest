// Created by Ruslan on 02.07.2023 (morehome@mail.ru)
<script
    setup
    lang="ts"
>
defineProps({
    title: String,
});
</script>

<template>
    <div class="widget w-100">
        <div class="text-h6 font-weight-bold mb-3 d-inline-block">
            {{ title }}
        </div>
        <VCard
            color="#fff"
            class="widget-content"
            min-height="200px"
            width="100%"
        >
            <slot/>
        </VCard>
    </div>
</template>

<style
    lang="scss"
    scoped
>
.widget {
    &-content {
        border-radius: 24px;
        box-shadow: 0 4px 24px rgba(0,0,0,.12);
    }
}
</style>
