import { useFetch } from '@vueuse/core';

const concatUrl = (url: string = '') => import.meta.env.VITE_BACKEND_API + url;

export type Portfolio = {
    id: number;
    name: string;
    date: Date;
    value: number;
}

class MainPageDto {
    readonly general: number = 0;

    readonly list: Portfolio[] = [];

    constructor(data: MainPageDto) {
        const {
            general,
            list,
        } = data;
        this.general = general;
        this.list = list;
    }
}

const fetchInitData = () => useFetch<MainPageDto>(concatUrl('/'))
.json();

export const useRequest = () => ({
    fetchInitData,
});
