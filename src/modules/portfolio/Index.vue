<script
    setup
    lang="ts"
>

import Header from '../../components/base/Header.vue'
import Container from '../../components/Container.vue'</script>
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
