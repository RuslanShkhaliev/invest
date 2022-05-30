<template>
    <slot
        name="button"
        :open="open"
    />
    <Teleport to="body">
        <transition name="modal">
            <Flex
                class="modal"
                justify="center"
                align="center"
                v-if="isOpen"
            >
                <div
                    class="inner wrap"
                    ref="modalInner"
                >
                    <Flex
                        class="header"
                        justify="space-between"
                        align="center"
                    >
                        <h4 class="header__title">
                            {{ title }}
                        </h4>
                        <button
                            class="close"
                            @click="close"
                        >
                            X
                        </button>
                    </Flex>
                    <div class="content">
                        <slot />
                    </div>
                    <Flex
                        v-if="$slots.footer"
                        class="footer"
                    >
                        <slot name="footer" />
                    </Flex>
                </div>
            </Flex>
        </transition>
    </Teleport>

</template>

<script lang="ts">
import { onClickOutside } from '@vueuse/core'
import {
    defineComponent,
    ref,
} from 'vue'
import Flex from './Flex.vue'

export default defineComponent({
    name: 'Modal',
    emits: ['close', 'open'],
    props: {
        title: {
            type: String,
            required: false,
            default: '',
        },
        isVisible: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    components: {
        Flex,
    },
    setup(props, { emit }) {
        const modalInner = ref()

        const isOpen = ref(props.isVisible)

        const open = () => {
            isOpen.value = true
            emit('open')
        }
        const close = () => {
            isOpen.value = false
            emit('close')
        }

        onClickOutside(modalInner, () => {
            console.log('click outside')
            close()
        })
        return {
            modalInner,
            isOpen,
            close,
            open,
        }
    },
})
</script>

<style
    lang="scss"
    scoped
>

.modal {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(10, 30, 66, 0.4);

    &-enter-active, &-leave-active {
        transition: visibility 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s;
    }

    &-enter-from, &-leave-to {
        visibility: hidden;
        opacity: 0;
    }
}

.inner {
    position: relative;
    max-height: 90vh;
    max-width: 86rem;
    min-width: 32rem;
    transition: height 0.3s ease-in-out 0s;
    overflow: hidden;

}

.footer {
    padding: 1rem;
}

.close {
    cursor: pointer;
}

.header {
    margin-bottom: 2.4rem;

    &__title {
        font-weight: 500;
        font-size: 2rem;
    }
}

.content {
}

</style>
