import { ResponseAPI_AssetHistories, ChartDataType } from '@/model/history';

export function getChartData(response: ResponseAPI_AssetHistories): ChartDataType[] {
  if (!response || !response.data || response.data.length === 0) {
    return [];
  }
  const { data } = response;
  return data.map(value => {
    const parsef = parseFloat(value.priceUsd ?? '0').toFixed(2)
    const price = parseFloat(parsef);
    return {
      x: value.time,
      y: [price, price, price, price], // sorry, but no data haha
    };
  });
}
