import {AssetDefaultDto} from './AssetDefault.dto';
import {BondAssetDto} from './BondAsset.dto';
import {CurrencyAssetDto} from './CurrencyAsset.dto';
import {StockAssetDto} from './StockAsset.dto';

export type AssetDto =
    AssetDefaultDto
    | BondAssetDto
    | CurrencyAssetDto
    | StockAssetDto

export {
    AssetDefaultDto,
    BondAssetDto,
    CurrencyAssetDto,
    StockAssetDto
}
