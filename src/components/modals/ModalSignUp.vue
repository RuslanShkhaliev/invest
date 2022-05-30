<script
    setup
    lang="ts"
>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Form from '@/components/containers/Form.vue'
import Modal from '@/components/containers/Modal.vue'
import Input from '@/components/UI/Input.vue'
import PasswordField from '@/components/UI/PasswordField.vue'
import { ROUTE_LAYOUT } from '@/router/consts'

const router = useRouter()
const modal = ref()

const register = () => {
    console.log('registred')
    modal.value.close()
    router.replace({ name: ROUTE_LAYOUT })
}
</script>

<template>
    <Modal
        is-visible
        ref="modal"
        title="Регистрация"
    >
        <Form @onSubmit="register">
            <Input
                label="Имя"
                fit="fill"
            />
            <PasswordField label="Пароль" />
            <button>Отправить</button>
        </Form>
        <template #footer>
            <RouterLink
                class="ml-a"
                :to="{ query: { modal: 'signIn' } }"
            >sign in
            </RouterLink>
        </template>
    </Modal>
</template>

<style
    lang="scss"
    scoped
>
.link {
    margin-left: auto;
}
</style>
