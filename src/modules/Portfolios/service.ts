import {IPortfolioModel, IPortfolioPreview} from '@/modules/Portfolios/interface';
import {usePortfolioStore} from '@/modules/Portfolios/store';
import {ApiService} from '@/services/api';


export class PortfolioService {
    private apiService
    private portfolioStore = usePortfolioStore()
    private apiPath = '/portfolios'

    constructor(apiService: ApiService) {
        this.apiService = apiService
    }

    public async getPortfolioListAsync(): Promise<void> {
        const {data:list} = await this.apiService.get<{data: IPortfolioPreview[]}>(this.apiPath)
        this.portfolioStore.savePortfolios(list)
    }

    public async getPortfolioByIdAsync(portfolioId: string): Promise<IPortfolioModel> {
        const portfolio = await this.apiService.get<IPortfolioModel>(`${this.apiPath}/${portfolioId}`)
        return portfolio
    }

    public async createPortfolioAsync(portfolio: Omit<Partial<IPortfolioPreview>, 'id'>): Promise<IPortfolioModel> {
        console.log('service', {portfolio})
        const newPortfolio = await this.apiService.post<IPortfolioPreview, IPortfolioModel>(this.apiPath, {
            body: JSON.stringify(portfolio)
        })

        this.portfolioStore.addPortfolio(newPortfolio)

        return newPortfolio
    }
}

