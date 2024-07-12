export interface ResponseAPI_AssetCollections {
  data: ResponseAPI_Assets_Data[];
  timestamp: number;
}

export interface ResponseAPI_Asset {
  data: ResponseAPI_Assets_Data;
  timestamp: number;
}

export interface ResponseAPI_Assets_Data {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
}
