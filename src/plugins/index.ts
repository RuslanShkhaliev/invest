import {apiServicesPlugin} from '@/plugins/api';
import {appServicesPlugin} from '@/plugins/services';
import {router} from '@/routes';
import {createPinia} from 'pinia';
import {App} from 'vue';
import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import {aliases, mdi} from 'vuetify/iconsets/mdi';
import {VDataTable} from 'vuetify/labs/VDataTable';

export const registerAppPlugins = (app: App) => {
    const vuetify = createVuetify({
        components: {
            VDataTable,
            ...components
        },
        directives,
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
            },
        },
    })
    app.use(createPinia())
    app.use(router)
    app.use(vuetify)
    app.use(apiServicesPlugin)
    app.use(appServicesPlugin)
}
