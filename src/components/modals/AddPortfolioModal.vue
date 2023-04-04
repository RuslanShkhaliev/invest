<template>
    <VDialog
        v-model="showModal"
        width="560"
    >
        <template v-slot:activator="{ props }">
            <VBtn
                color="primary"
                v-bind="props"
            >
                Добавить портфель
            </VBtn>
        </template>
        <VCard>
            <VCardTitle>
                <span class="text-h4">Создание портфеля</span>
            </VCardTitle>
            <VCardText>
                <VContainer>
                    <VRow>
                        <VCol
                            cols="12"
                        >
                            <VTextField
                                label="Название*"
                                required
                                v-model="newPortfolio.name"
                            />
                        </VCol>
                        <VCol
                            cols="12"
                        >
                            <VTextarea
                                label="Описание"
                                hint="Можно описать активы какого типа содержит портфель"
                                persistent-hint
                            />
                        </VCol>
                    </VRow>
                </VContainer>
            </VCardText>
            <VCardActions>
                <VSpacer />
                <VBtn
                    @click="closeModal"
                >
                    Close
                </VBtn>
                <VBtn
                    @click="createPortfolio"
                >
                    Создать
                </VBtn>
            </VCardActions>
        </VCard>
    </VDialog>
</template>

<script
    lang="ts"
    setup
>
import type {Portfolio} from '@/interfaces';
import {ref} from 'vue';

type PortfolioModel = Omit<Portfolio, 'created_at' | 'id'>
const emit = defineEmits([
    'createPortfolio',
    'close',
]);

const showModal = ref(false);
const newPortfolio = ref<PortfolioModel>({name: '', assets: []});

const resetForm = () => {
    newPortfolio.value = {name: '', assets: []};
};

const closeModal = () => {
    resetForm();
    showModal.value = false;
    emit('close');
};

const createPortfolio = () => {
    emit('createPortfolio', {
        ...newPortfolio.value,
        id: Date.now(),
        created_at: new Date(),
    });
    closeModal();
};
</script>

<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-container {
    background-color: white;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.2);
    max-width: 600px;
    width: 100%;
}

form {
    display: flex;
    flex-direction: column;
}

.form-control {
    margin-bottom: 8px;
}

label {
    font-weight: bold;
    margin-bottom: 4px;
}

input[type='text'] {
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 8px;
    width: 100%;
}

button {
    padding: 8px;
    border-radius: 4px;
    border: none;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
    margin-right: 8px;
}

button[type='submit'] {
    background-color: #4caf50;
}

button[type='button'] {
    background-color: #ccc;
}
</style>
