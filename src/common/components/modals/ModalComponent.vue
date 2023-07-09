<script
    lang="ts"
    setup
>

const props = defineProps<{
    modelValue: boolean
}>()
const emit = defineEmits(['update:modelValue', 'close'])

const close = () => {
    emit('update:modelValue', !props.modelValue)
    emit('close', !props.modelValue)
}
</script>

<template>
    <VDialog
        :model-value="modelValue"
        @update:modelValue="close"
        width="560"
    >
        <template v-slot:activator="{ props }">
            <slot
                name="trigger"
                :props="{props}"
            />
        </template>
        <VCard
            class="pa-6 position-relative"
            border
            elevation="5"
        >
            <VCardItem>
                <VCardTitle>
                    <slot name="title"></slot>
                </VCardTitle>
            </VCardItem>
            <VCardItem>
                <slot />
            </VCardItem>
            <VCardActions>
                <slot name="actions" />
            </VCardActions>
        </VCard>
    </VDialog>
</template>


<style scoped>
form {
    display: flex;
    flex-direction: column;
}

.form-control {
    margin-bottom: 8px;
}

label {
    font-weight: bold;
    margin-bottom: 4px;
}
</style>
