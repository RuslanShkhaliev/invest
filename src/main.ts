import '@/assets/styles/main.scss';
import {registerAppPlugins} from '@/plugins';
import {createApp} from 'vue';
import App from './App.vue';


const app = createApp(App)


registerAppPlugins(app)

app.mount('#app')
