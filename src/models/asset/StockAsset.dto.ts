import {AssetDefaultDto} from '@/models/asset/AssetDefault.dto';
import {AssetType, DefaultNullable} from '@/types';


export class StockAssetDto extends AssetDefaultDto {
    public type = AssetType.STOCK
    public annualPercentageRate: DefaultNullable<number>
    constructor(fields?: Partial<StockAssetDto>) {
        const {annualPercentageRate = null, ...model} = fields || {}
        super(model)
        this.annualPercentageRate = annualPercentageRate
    }
}
