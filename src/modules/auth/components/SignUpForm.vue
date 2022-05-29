<script
    setup
    lang="ts"
>

import { useRouter } from 'vue-router'
import Form from '@/components/Form.vue'
import Input from '@/components/UI/Input.vue'
import PasswordField from '@/components/UI/PasswordField.vue'
import { ROUTE_LAYOUT } from '@/router/consts'

const router = useRouter()
const register = () => {
    console.log('registred')
    router.replace({ name: ROUTE_LAYOUT })
}
</script>

<template>
    <Form @onSubmit="register">
        <Input label="Имя" />
        <PasswordField label="Пароль" />
        <button>Отправить</button>
    </Form>
</template>

<style
    lang="scss"
    scoped
>

</style>
