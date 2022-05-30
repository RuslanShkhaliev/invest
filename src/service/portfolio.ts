import { useRequest } from '@/api'

export type Portfolio = {
    id: number;
    title: string;
    date: Date;
    value: number;
}

export type Portfolios = {
    general: number
    list: Portfolio[]
}

const getAll = () => useRequest<Portfolios>({ url: '/portfolios' })
const getOne = (id: number) => useRequest<Portfolio>({ url: `/portfolios/${id}` })
const create = (data: { title: string }) => useRequest({
    url: '/portfolios',
    method: 'post',
    data,
})

export const PortfolioService = {
    getAll,
    getOne,
    create,
}
