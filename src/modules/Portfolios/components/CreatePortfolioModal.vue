// Created by Ruslan on 08.07.2023 (morehome@mail.ru)
<script
    setup
    lang="ts"
>
import ModalComponent from '@/common/components/modals/ModalComponent.vue';
import {computed, ref, unref} from 'vue';

const defaultPortfolio = {name: '', tag: '', description: ''};

const emit = defineEmits([
    'createPortfolio',
    'close',
]);

const form = ref()
const modalIsShow = ref(false);

const newPortfolio = ref(defaultPortfolio);
const isValid = computed(() => unref(newPortfolio.value)?.name?.length >= 3);

const showModal = () => {
    modalIsShow.value = true;
}

const closeModal = () => {
    form.value.reset()
    modalIsShow.value = false;
};

const createPortfolio = () => {
    if (isValid.value) {
        emit('createPortfolio', newPortfolio.value);
    }
};


</script>

<template>
    <ModalComponent
        @close="closeModal"
        v-model="modalIsShow"
    >
        <template #trigger="props">
            <VBtn
                max-width="100%"
                width="100%"
                height="64"
                variant="text"
                class="text-none"
                color="#4f545c"
                prepend-icon="mdi-check"
                v-bind="props"
                @click="showModal"
            >
                Добавить портфель
            </VBtn>
        </template>
        <template #title>
            <h5 class="text-h5">Создание портфеля</h5>
        </template>

        <VForm ref="form">
            <VRow>
                <VCol
                    cols="12"
                >
                    <VTextField
                        label="Название*"
                        required
                        v-model="newPortfolio.name"
                        :rules="[!!isValid ||
                                'Название должно содержать от 3 символов']"
                    />
                </VCol>
                <VCol
                    cols="12"
                >
                    <VTextField
                        label="Тег"
                        prefix="#"
                        hint="Метка помогает быстрее найти портфель"
                        persistent-hint
                        v-model="newPortfolio.tag"
                    />
                </VCol>
                <VCol
                    cols="12"
                >
                    <VTextarea
                        label="Описание"
                        hint="Можно описать какого типа активы содержит портфель"
                        persistent-hint
                        v-model="newPortfolio.description"
                    />
                </VCol>

            </VRow>
        </VForm>
        <template #actions>
            <VSpacer />
            <VBtn
                class="btn-action"
                color="yellow-darken-3"
                @click="closeModal"
            >
                Закрыть
            </VBtn>
            <VBtn
                class="btn-action"
                @click="createPortfolio"
                color="light-blue-darken-4"
            >
                Создать
            </VBtn>
        </template>
    </ModalComponent>
</template>

<style
    lang="scss"
    scoped
>

</style>
