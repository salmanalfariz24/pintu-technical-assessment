'use client';

import type { CellContext } from '@tanstack/react-table';

import { toUSD } from '@/lib/number/currency';

import type { AssetDataType } from '@/model/assets';

function Price(props: CellContext<AssetDataType, unknown>) {
  const { row } = props;
  const price = parseFloat(row.getValue<string>('price'));
  return <span className="font-semibold leading-6">{toUSD(price, 2)}</span>;
}

export default Price;
