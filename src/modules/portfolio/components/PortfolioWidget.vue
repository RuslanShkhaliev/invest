<script
    setup
    lang="ts"
>
import CardWrap from '../../shared/CardWrap.vue';
import Flex from '../../shared/Flex.vue';

export type Portfolio = {
    id: number;
    name: string;
    date: string;
    value: number;
}

const props = withDefaults(defineProps<Portfolio>(), {});

</script>

<template>
    <CardWrap :to="{ name: 'portfolio', params: { id }}">
        <Flex direction="column">
            <h4>{{ props.id }}&nbsp;{{ props.name }}</h4>
            <strong>{{ props.value }}</strong>
            <strong>{{ props.value }}</strong>
            <strong>{{ props.value }}</strong>
            <strong>{{ props.value }}</strong>
            <strong>{{ props.value }}</strong>
            <date>{{ props.date }}</date>
        </Flex>
    </CardWrap>
</template>

<style
    lang="scss"
    scoped
>

</style>
