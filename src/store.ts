import type {Portfolio} from '@/interfaces';
import {defineStore} from 'pinia';




interface IPortfolioStore {
    portfolios: Portfolio[]
    currentPortfolioId: number | string | null
}


export const usePortfolioStore = defineStore({
    id: 'portfolio',
    state: () => ({
        portfolios: [],
        currentPortfolioId: null,
    }) as IPortfolioStore,
    actions: {
        addPortfolio(portfolio: Portfolio) {
            this.portfolios.push(portfolio);
        },
        setCurrentPortfolio(portfolioId: number) {
            this.currentPortfolioId = portfolioId;
        }
    },
    getters: {
        getPortfolios(): Portfolio[] {
            return this.portfolios;
        },
        getCurrentPortfolio(): Portfolio | undefined {
            return this.portfolios.find((portfolio) => portfolio.id === this.currentPortfolioId);
        }
    }
})
