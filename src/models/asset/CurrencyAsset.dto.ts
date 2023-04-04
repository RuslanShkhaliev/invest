import {AssetDefaultDto} from '@/models/asset/AssetDefault.dto';
import {AssetType, DefaultNullable} from '@/types';


export class CurrencyAssetDto extends AssetDefaultDto {
    public type = AssetType.CURRENCY
    public exchangeRate: DefaultNullable<number>

    constructor(props?: Partial<CurrencyAssetDto>) {
        const {exchangeRate = null, ...model} = props || {}
        super(model)
        this.exchangeRate = exchangeRate
    }
}
