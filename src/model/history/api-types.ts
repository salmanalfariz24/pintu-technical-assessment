export interface ResponseAPI_AssetHistories {
  data: ResponseAPI_Assets_History[];
  timestamp: number;
}

export interface ResponseAPI_Assets_History {
  priceUsd: string;
  time: number;
  date: string;
}
