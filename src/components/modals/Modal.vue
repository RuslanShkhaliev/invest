<template>
    <div class="modal" :class="{ 'is-active': isActive }">
        <div class="modal-background" @click="close"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">{{ title }}</p>
                <button class="delete" aria-label="close" @click="close">
                    X
                </button>
            </header>
            <section class="modal-card-body">
                <slot/>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">

defineProps({
    title: {
        type: String,
        default: '',
    },
    isActive: {
        type: Boolean,
        default: false,
    }
})

const emit = defineEmits(['close'])

const close = () => {
    emit('close')
}
</script>

<style scoped>
.modal {
    display: none;
    position: fixed;
    z-index: 20;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
}

.is-active {
    display: flex !important;
}

.modal-background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-card {
    position: relative;
    margin: auto;
    width: 100%;
    max-width: 700px;
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;
}

.modal-card-head {
}

.modal-card-title {
    font-size: 2rem;
}

.modal-card-body {
    padding: 2rem;
}

.delete {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    width: 3rem;
    height: 3rem;
    color: #333;
    border-radius: 50%;
    background-color: rgba(0,0,0,.1);
    transition: 0.3s;
}
.delete:hover {
    background-color: rgba(0,0,0,.2);
}
</style>
