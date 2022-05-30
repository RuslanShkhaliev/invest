<script
    setup
    lang="ts"
>

import Header from '../components/base/Header.vue'
import Container from '../components/containers/Container.vue'</script>
<template>
    <div class="layout">
        <Header />
        <Container
            tag="main"
            class="inner"
        >
            <RouterView />
        </Container>
    </div>
</template>

<style
    scoped
    lang="scss"
>
.layout {
    min-height: 100vh;
}

.inner {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

</style>
