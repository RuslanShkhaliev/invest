import { AxiosRequestConfig } from 'axios'
import { ref, Ref, UnwrapRef } from 'vue'
import { axiosInstance } from './client'

interface UseRequestResponse<D = any> {
    data: Ref<UnwrapRef<D | null>>;
    error: Ref<UnwrapRef<string | null>>
    isLoading: Ref<UnwrapRef<boolean>>
    isFinish: Ref<UnwrapRef<boolean>>
    headers: Ref<UnwrapRef<any | null>>
}

export const useRequest = <R = any, D = any>(requestConfig: AxiosRequestConfig<D>): UseRequestResponse<R> => {
    const data = ref(null)
    const error = ref(null)
    const headers = ref()
    const isFinish = ref(false)
    const isLoading = ref(false)

    const loading = (bool: boolean) => {
        isLoading.value = bool
        isFinish.value = !bool
    }

    const { method = 'get', ...config } = requestConfig || {}

    loading(true)
    axiosInstance({ method, ...config })
    .then(({ data: _data, headers: _headers }) => {
        data.value = _data
        headers.value = _headers
    }).catch((err) => {
        error.value = err
    }).finally(() => {
        loading(false)
    })

    return {
        data,
        error,
        headers,
        isFinish,
        isLoading,
    }
}
