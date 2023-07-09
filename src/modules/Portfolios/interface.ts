import {IAsset} from '@/modules/Asset/interface';


export interface IPortfolioPreview {
    id: number;
    name: string;
    balance: number;
    profit: number;
}
 
export interface IPortfolioPerformer {
    assetName: string
    assetIcon: string
    percent: number
    value: number
}

export interface IPortfolioModel extends IPortfolioPreview {
    balance: number; // текущий баланс
    profit: number; // прибыль/убыток за все время
    bestPerformer: IPortfolioPerformer | null; // лучший результат
    worstPerformer: IPortfolioPerformer | null; // худший результат
    description: string; // описание/заметка
    assets: IAsset[]; // список активов
}
