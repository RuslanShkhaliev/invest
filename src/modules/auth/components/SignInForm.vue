<script
    setup
    lang="ts"
>
import { reactive } from 'vue'
import Form from '@/components/Form.vue'
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
    <Form @submit="login">
        <Input
            label="Имя"
            v-model="form.name"
        />
        <PasswordField
            label="Пароль"
            v-model="form.password"
        />
        <button>Отправить</button>
    </Form>
</template>

<style
    lang="scss"
    scoped
>

</style>
