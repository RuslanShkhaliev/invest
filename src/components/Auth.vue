<script
    setup
    lang="ts"
>

import { useRouteQuery } from '@vueuse/router'
import { computed } from 'vue'
import Flex from '@/components/containers/Flex.vue'
import ModalSignIn from '@/components/modals/ModalSignIn.vue'
import ModalSignUp from '@/components/modals/ModalSignUp.vue'

const modalQuery = useRouteQuery('modal')

const modals = {
    signIn: ModalSignIn,
    signUp: ModalSignUp,
}
const onClose = () => {
    modalQuery.value = null
}
const modalComponent = computed(() => modals[modalQuery.value])

</script>

<template>
    <Flex
        tag="nav"
        class="menu-list"
        align="center"
        justify="flex-end"
        col-gap="2rem"
    >
        <RouterLink
            class="link"
            :to="{ query: { modal: 'signIn'}}"
        >sign in
        </RouterLink>
        <RouterLink
            class="link"
            :to="{ query: { modal: 'signUp'}}"
        >sign up
        </RouterLink>
        <Component
            :is="modalComponent"
            @close="onClose"
        />
    </Flex>
</template>

<style
    lang="scss"
    scoped
>
.link {
    padding: 1rem;
    background: #333;
    color: #fff;
}

</style>
