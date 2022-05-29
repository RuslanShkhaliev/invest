<script
    setup
    lang="ts"
>
import Flex from '@/components/Flex.vue'

defineProps({
    type: {
        type: String,
        required: false,
        default: 'text',
    },
    label: {
        type: String,
        required: false,
        default: '',
    },
    inline: {
        type: Boolean,
        required: false,
        default: false,
    },
    error: {
        type: [String, Object],
        required: false,
        default: null,
    },
    hint: {
        type: String,
        required: false,
        default: '',
    },
    modelValue: {
        type: String,
        required: false,
        default: '',
    },
})

const emit = defineEmits(['update:modelValue', 'change'])

const onInput = ({ target }: Event) => {
    emit('update:modelValue', (target as HTMLInputElement).value)
}

</script>

<template>
    <Flex direction="column">
        <label>
            <Flex
                :direction="inline ? 'row' : 'column'"
                :align="inline ? 'center' : ''"
                row-gap="1rem"
            >
                <span
                    v-if="label"
                    class="label"
                >{{ label }}</span>
                <Flex
                    wrap="nowrap"
                    class="input-wrap"
                >
                    <input
                        @input="onInput"
                        class="input"
                        :type="type"
                        :model-value="modelValue"
                    />
                    <Flex
                        v-if="$slots.append"
                        class="append"
                    >
                        <slot name="append"></slot>
                    </Flex>
                </Flex>
            </Flex>
        </label>
        <div
            v-if="error || hint"
            class="bottom"
        >
            <span
                v-if="error"
                class="error"
            >{{ error }}</span>
            <span
                v-if="!error && hint"
                class="hint"
            >{{ hint }}</span>
        </div>
    </Flex>
</template>

<style
    lang="scss"
    scoped
>
.label {
    font-weight: 500;
}

.input-wrap {
    border-radius: 4px;
    border: 1px solid rgb(207, 214, 228);
    overflow: hidden;
}

.input {
    max-width: 100%;
    width: 100%;
    flex-shrink: 1;
    flex-grow: 1;
    padding: 1rem 1.5rem;
    outline: none;
    border: none;
    transition: .3s ease;

    &:focus-visible {
        border-color: #3861fb;
    }
}

.append {
    max-width: 4rem;
    flex-grow: 1;
}

.bottom {
    padding: 5px;
    line-height: 1;
}

.error {
    color: red;
}

.hint {
    font-size: 1.4rem;
    text-transform: lowercase;
    color: rgba(0, 0, 0, .8)
}
</style>
