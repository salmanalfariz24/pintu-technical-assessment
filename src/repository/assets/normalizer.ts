import type {
  AssetCollectionDataType,
  AssetDataType,
  ResponseAPI_Asset,
  ResponseAPI_AssetCollections,
} from '@/model/assets';

import strconv from '@/lib/string/strconv';

export function normalizeAssetsCollections(response: ResponseAPI_AssetCollections): AssetCollectionDataType {
  const now = new Date();
  if (!response || !response.data || response.data.length === 0) {
    return {
      assets: [],
      timestamp: now.valueOf(),
    };
  }

  const { data, timestamp } = response;
  const assets = data.map<AssetDataType>(dt => {
    const id = dt.id ?? '';
    const rank = strconv.ParseInt(dt.rank ?? 0);
    const detailURL = `/currencies/${id}`;
    return {
      id: dt.id ?? '',
      rank: rank,
      symbol: dt.symbol ?? '',
      name: dt.name ?? '',
      price: dt.priceUsd ?? '0',
      detailURL: detailURL,
      marketCap: dt.marketCapUsd ?? '0',
      supply: dt.supply ?? '0',
      maxSupply: dt.maxSupply ?? '0',
      changePercentage: dt.changePercent24Hr ?? '0',
    };
  });

  return {
    assets: assets,
    timestamp: timestamp ?? now.valueOf(),
  };
}

export function normalizeSingleAsset(response: ResponseAPI_Asset): AssetDataType {
  if (!response || !response.data) {
    throw new Error('');
  }

  const { data } = response;
  const id = data.id ?? '';
  const rank = strconv.ParseInt(data.rank ?? 0);
  const detailURL = `/currencies/${id}`;
  return {
    id: id,
    rank: rank,
    symbol: data.symbol ?? '',
    name: data.name ?? '',
    price: data.priceUsd ?? '0',
    detailURL: detailURL,
    marketCap: data.marketCapUsd ?? '0',
    supply: data.supply ?? '0',
    maxSupply: data.maxSupply ?? '0',
    changePercentage: data.changePercent24Hr ?? '0',
  };
}
