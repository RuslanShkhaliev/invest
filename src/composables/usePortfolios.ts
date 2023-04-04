import type {Portfolio} from '@/interfaces';
import {LocalStorageService} from '@/services/localStorage';
import {reactive, watch} from 'vue';

const PORTFOLIO_KEY = 'portfolio'

export const usePortfolios = () => {

    const state = reactive({
        portfolios: (LocalStorageService.get(PORTFOLIO_KEY) ?? []) as Portfolio[]
    })

    watch(state.portfolios, () => {
        console.log(state.portfolios)
        LocalStorageService.set(PORTFOLIO_KEY, state.portfolios)
    })

    const addPortfolio = (portfolio: Portfolio) => {
        state.portfolios.push(portfolio)
    }

    const deletePortfolio = (id: number) => {
        state.portfolios = state.portfolios.filter((portfolio) => portfolio.id !== id)
    }

    const getPortfolios = (): Portfolio[] => state.portfolios

    const getPortfolio = (id: number | string): Portfolio | undefined => state.portfolios.find((portfolio) => +portfolio.id === +id)

    return {
        addPortfolio,
        deletePortfolio,
        getPortfolios,
        getPortfolio
    }
}
