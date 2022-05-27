<script
    setup
    lang="ts"
>

import Container from '../shared/Container.vue';
import Header from '../shared/Header.vue'; </script>
<template>
    <div class="layout">
        <Header />
        <Container tag="main">
            <RouterView />
        </Container>
    </div>
</template>

<style
    scoped
    lang="scss"
>
.layout {
}

</style>
