<script
    setup
    lang="ts"
>
import Flex from '@/components/Flex.vue'

const emit = defineEmits(['submit'])
const submit = (e: HTMLFormElement) => {
    emit('submit', e)
}
</script>

<template>
    <Flex justify="center">
        <form
            class="form wrap"
            @submit.prevent="submit"
        >
            <Flex
                row-gap="2rem"
                direction="column"
            >
                <slot />
            </Flex>
        </form>
    </Flex>
</template>

<style
    lang="scss"
    scoped
>
.form {
    max-width: 60rem;
    width: 100%;
}

</style>
