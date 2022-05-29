<script
    setup
    lang="ts"
>

import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import { PortfolioService } from '@/modules/portfolio/service'

const title = ref('')

const modal = ref()
const open = () => {
    modal.value.open()
}

const { data, isFinish } = PortfolioService.create({ title: title.value })
console.log(data, isFinish)
</script>

<template>
    <button @click="open">open modal</button>
    <Modal
        title="Создать портфель"
        ref="modal"
    >
        <form @submit.prevent="create">
            <label>
                Введите название:
                <input
                    type="text"
                    v-model="title"
                >
            </label>
            <button type="submit">Cоздать новый портфель</button>
        </form>
    </Modal>
</template>

<style
    lang="scss"
    scoped
>

</style>
