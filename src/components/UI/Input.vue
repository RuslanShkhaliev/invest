<script
    setup
    lang="ts"
>
import Flex from '@/components/containers/Flex.vue'

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
    prefix: {
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
        <label class="field-wrap">
            <Flex
                :direction="inline ? 'row' : 'column'"
                :align="inline ? 'center' : 'flex-start'"
                row-gap="1rem"
                wrap="nowrap"
            >
                <span
                    v-if="label"
                    class="label"
                >{{ label }}</span>
                <Flex
                    wrap="nowrap"
                    class="input-wrap"
                    justify="flex-end"
                >
                    <div
                        v-if="prefix"
                        class="prefix"
                    >
                        {{ prefix }}
                    </div>
                    <input
                        @input="onInput"
                        class="input"
                        :type="type"
                        :model-value="modelValue"
                    />
                    <div v-if="$slots.append">
                        <slot name="append"></slot>
                    </div>
                    <!--                    <Flex-->
                    <!--                        -->
                    <!--                        class="append"-->
                    <!--                    >-->
                    <!--                    </Flex>-->
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
.field-wrap {
    width: 100%;
}

.label {
    display: inline-flex;
    margin-right: 1rem;
    font-weight: 500;
    cursor: pointer;
}

.input-wrap {
    align-items: stretch;
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

.prepend {
    position: absolute;
}

.prefix {
    display: flex;
    align-items: center;
    text-transform: lowercase;
    padding: 0 1rem;
    font-size: 1.2rem;
    background: rgba(#333, .5);
    color: #fff;
}

.append {
    max-width: 4rem;
    flex-grow: 1;
    justify-self: flex-start;
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
