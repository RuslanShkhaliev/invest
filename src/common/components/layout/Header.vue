<script
    setup
    lang="ts"
>
import {ref} from 'vue';
import {useRoute, useRouter} from 'vue-router';

const router = useRouter()
const route = useRoute()

const title = ref(route.meta.title)

router.beforeResolve((to, from) => {
    console.log(to.meta.title, from.meta.title)
    title.value = to.meta.title
})
</script>

<template>
    <VToolbar
        theme="dark"
        color="#333"
        elevation="6"
    >
        <VToolbarTitle>{{title}}</VToolbarTitle>
        <VListItem
            lines="two"
            prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
            title="Jane Smith"
            subtitle="Logged in"
        />
    </VToolbar>
</template>

<style lang="scss" scoped>

</style>
