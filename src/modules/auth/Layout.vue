<script
    setup
    lang="ts"
>

import Container from '@/components/Container.vue'
import Flex from '@/components/Flex.vue'</script>

<template>
    <div class="auth-page">
        <Flex direction="column">
            <Container>
                <RouterView />
            </Container>
        </Flex>
    </div>
</template>

<style
    lang="scss"
    scoped
>

</style>
