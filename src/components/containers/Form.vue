<script
    setup
    lang="ts"
>
import Flex from '@/components/containers/Flex.vue'

const emit = defineEmits(['submit'])
const submit = (e: HTMLFormElement) => {
    emit('submit', e)
}
</script>

<template>
    <Flex>
        <form
            class="form"
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
    width: 100%;
}

</style>
