<script
    setup
    lang="ts"
>

import { ref } from 'vue'
import Form from '@/components/containers/Form.vue'
import Modal from '@/components/containers/Modal.vue'
import Input from '@/components/UI/Input.vue'
import { PortfolioService } from '@/service'

const title = ref('')
const save = (data: any) => {
    console.log(data, 'created portfolio')
}
const create = async () => {
    console.log(title)
    const { data } = await PortfolioService.create({ title: title.value })
    save(data)
}
</script>

<template>
    <Modal title="Создать портфель">
        <template #button="{ open }">
            <button @click="open">create new</button>
        </template>
        <Form @submit="create">
            <Input
                label="Введите название:"
                v-model="title"
            />
            <button type="submit">Cоздать новый портфель</button>
        </Form>
    </Modal>
</template>

<style
    lang="scss"
    scoped
>

</style>
