import {PortfolioService} from '@/modules/Portfolios/service';
import {App} from 'vue';


export interface IAppServices {
    $portfolioService: PortfolioService
}

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $appServices: IAppServices
    }
}

export const appServicesPlugin = {
    install(app: App) {
        app.provide('$appServices', {
            $portfolioService: new PortfolioService(app.config.globalProperties.$apiService),
        })
    }
}
