import {IPortfolioPreview} from '@/modules/Portfolios/interface';
import {computed, reactive} from 'vue';


interface IPortfolioState {
    portfoliosList: IPortfolioPreview[]
}

const registerPortfoliosStore = () => {
    const state = reactive<IPortfolioState>({
        portfoliosList: [],
    })

    console.log('register Portfolio store')

    const getPortfoliosList = computed(() => state.portfoliosList)


    const savePortfolios = (portfolios: IPortfolioPreview[]) => {
        state.portfoliosList = portfolios
    }

    const addPortfolio = <T extends IPortfolioPreview>(portfolio: T) => {
        console.log(state.portfoliosList)
        state.portfoliosList.push(portfolio)
    }

    return () => ({
        getPortfoliosList,
        savePortfolios,
        addPortfolio,
    })
}

export const usePortfolioStore = registerPortfoliosStore()
