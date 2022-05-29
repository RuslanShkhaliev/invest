<script
    setup
    lang="ts"
>
import { useDateFormat } from '@vueuse/core'
import CardWrap from '../../../components/CardWrap.vue'
import Flex from '../../../components/Flex.vue'

export type Portfolio = {
    id: number;
    name: string;
    date: string;
    value: number;
}

const props = defineProps<Portfolio>()

const {
    id, name, value, date,
} = props

const formattedDate = useDateFormat(date, 'DD.MM.YY')

</script>

<template>
    <CardWrap :to="{ name: 'portfolio', params: { id }}">
        <Flex direction="column">
            <h4>{{ id }}&nbsp;{{ name }}</h4>
            <Flex justify="space-between">
                <span>value</span>&nbsp;
                <strong>{{ value }}</strong>
            </Flex>
            <Flex>
                <span>date:</span>&nbsp;
                <span>{{ formattedDate }}</span>
            </Flex>
        </Flex>
    </CardWrap>
</template>

<style
    lang="scss"
    scoped
>
h4 {
    margin: 0;
}

</style>
