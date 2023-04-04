import {AssetDefaultDto} from '@/models/asset/AssetDefault.dto';
import {AssetType} from '@/types';


export class BondAssetDto extends AssetDefaultDto {
    public type = AssetType.BOND
    public faceValue?: number;
    public annualCouponRate?: number;
    public maturityDate?: Date;

    constructor(props?: Partial<BondAssetDto>) {
        const {
            faceValue = 0,
            annualCouponRate = 0,
            maturityDate,
            ...model
        } = props || {}
        
        super(model)
        this.faceValue = faceValue
        this.annualCouponRate = annualCouponRate
        this.maturityDate = maturityDate
    }
}
