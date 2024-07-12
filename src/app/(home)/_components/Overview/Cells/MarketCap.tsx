'use client';

import type { CellContext } from '@tanstack/react-table';

import strconv from '@/lib/string/strconv';
import { toUSD } from '@/lib/number/currency';

import type { AssetDataType } from '@/model/assets';

function MarketCap(props: CellContext<AssetDataType, unknown>) {
  const { row } = props;
  const marketCap = strconv.ParseFloat(row.getValue<string>('marketCap'));
  return <div className="font-medium">{toUSD(marketCap)}</div>;
}

export default MarketCap;
