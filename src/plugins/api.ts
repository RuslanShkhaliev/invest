import {PortfolioService} from '@/modules/Portfolios/service';
import {ApiService} from '@/services/api';
import {createInstance} from 'http-client';
import {App} from 'vue';


export interface IApiServices {
    $apiService: ApiService,
    $portfolioService: PortfolioService
}

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $apiService: ApiService
    }
}

export const apiServicesPlugin = {
    install(app: App) {
        const httpClient = createInstance({
            baseUrl: 'http://localhost:8000/api',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const $apiService = new ApiService(httpClient)
        app.config.globalProperties.$apiService = $apiService
        app.provide('$apiService', $apiService)
    }
}
