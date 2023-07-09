import {IAppServices} from '@/plugins/services';
import {ApiService} from '@/services/api';
import {inject} from 'vue';

export const getGlobalProperties = <T = any>(name: string): T => {
    const injectable = inject<T>(name)
    if (!injectable) {
        throw new Error(`No provided property named ${name}`)

    }
    return injectable
}

export const useApiService = () => getGlobalProperties<ApiService>('$apiService')
export const useAppServices = () => getGlobalProperties<IAppServices>('$appServices')
