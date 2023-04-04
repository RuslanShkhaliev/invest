import '@/assets/styles/main.scss';
import {router} from '@/routes';
import {createPinia} from 'pinia';
import {createApp} from 'vue';
import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import App from './App.vue';

const vuetify = createVuetify({
    components,
    directives
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
