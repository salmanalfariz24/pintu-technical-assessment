export interface AssetCollectionDataType {
  assets: AssetDataType[];
  timestamp: number;
}

export interface AssetDataType {
  id: string;
  rank: number;
  symbol: string;
  name: string;
  price: string;
  detailURL: string;
  marketCap: string;
  supply: string;
  maxSupply: string;
  changePercentage: string;
}
