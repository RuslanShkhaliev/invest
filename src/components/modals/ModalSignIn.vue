<script
    setup
    lang="ts"
>
import { reactive } from 'vue'
import Form from '@/components/containers/Form.vue'
import Modal from '@/components/containers/Modal.vue'
import Input from '@/components/UI/Input.vue'
import PasswordField from '@/components/UI/PasswordField.vue'
// import { ROUTE_LAYOUT } from '@/router/consts'

const form = reactive({
    name: '',
    password: '',
})

// const router = useRouter()
const login = () => {
    console.log(form)
    // router.replace({ name: ROUTE_LAYOUT })
}
</script>

<template>
    <Modal
        is-visible
        ref="modal"
        title="Авторизация"
    >
        <Form @submit="login">
            <Input
                label="Имя"
                prefix="Rub"
                v-model="form.name"
            />
            <PasswordField
                label="Пароль"
                v-model="form.password"
            />
            <button>Отправить</button>
        </Form>
        <template #footer>
            <RouterLink
                class="ml-a"
                :to="{ query: { modal: 'signUp'}}"
            >sign up
            </RouterLink>
        </template>
    </Modal>

</template>

<style
    lang="scss"
    scoped
>

</style>
