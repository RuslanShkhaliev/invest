<script
    setup
    lang="ts"
>

import { ref } from 'vue'
import Input from '@/components/UI/Input.vue'

defineProps({
    modelValue: {
        type: String,
        required: false,
        default: '',
    },
})

const emit = defineEmits(['update:modelValue'])

const password = ref('')
const onInput = (value: string) => {
    password.value = value
    emit('update:modelValue', password.value)
}

const isShownPass = ref(false)
const showPass = () => {
    isShownPass.value = !isShownPass.value
}
</script>

<template>
    <Input
        :model-value="modelValue"
        @update:model-value="onInput"
        :type="isShownPass ? 'text':'password'"
    >
        <template #append>
            <button
                @click="showPass"
                type="button"
                class="btn"
            >
                {{ isShownPass ? 'Shown' : 'Eye' }}
            </button>
        </template>
    </Input>
</template>

<style
    lang="scss"
    scoped
>
.btn {
    width: 100%;
    height: 100%;
    border: none;
    background-color: #eee;
    cursor: pointer;
}

</style>
