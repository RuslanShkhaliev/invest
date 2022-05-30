<script
    setup
    lang="ts"
>

import { useRoute } from 'vue-router'
import CardWrap from '@/components/containers/CardWrap.vue'
import Flex from '@/components/containers/Flex.vue'

const { params } = useRoute()
</script>

<template>
    {{ params.id }}
    <div>
        <Flex
            row-gap="2rem"
            col-gap="2rem"
        >
            <CardWrap
                v-for="n in 50"
                :key="n"
            >
                <div>title:</div>
                <div>title:</div>
                <div>title:</div>
                <div>title:</div>
            </CardWrap>
        </Flex>
    </div>
</template>

<style
    lang="scss"
    scoped
>

</style>
