import {AssetType, DefaultNullable} from '@/types';


export class AssetDefaultDto {
    public type = AssetType.DEFAULT;
    public name: string;
    public quantity: number;
    public purchasePrice: number;
    public brokerCommission: DefaultNullable<number>;
    public tax: DefaultNullable<number>;
    public investmentPeriod: DefaultNullable<number>;

    public constructor(model?: Partial<AssetDefaultDto>) {
        const {
            investmentPeriod = null,
            purchasePrice = 0,
            brokerCommission = null,
            quantity = 1,
            tax = null,
            name = ''
        } = model || {}
        this.name = name;
        this.quantity = quantity;
        this.purchasePrice = purchasePrice
        this.brokerCommission = brokerCommission
        this.investmentPeriod = investmentPeriod
        this.tax = tax
    }
}
