'use client';

import type { ColumnDef } from '@tanstack/react-table';

import type { AssetDataType } from '@/model/assets';

import ChangePercentage from './Cells/ChangePercentage';
import CirculatingSupply from './Cells/CirculatingSupply';
import MarketCap from './Cells/MarketCap';
import Name from './Cells/Name';
import Price from './Cells/Price';

export const columns: ColumnDef<AssetDataType>[] = [
  {
    accessorKey: 'rank',
    header: '#',
  },
  {
    header: 'Name',
    accessorKey: 'name',
    cell: Name,
  },
  {
    header: 'Price',
    accessorKey: 'price',
    cell: Price,
  },
  {
    header: '24h (%)',
    accessorKey: 'changePercentage',
    cell: ChangePercentage,
  },
  {
    header: 'Market Cap',
    accessorKey: 'marketCap',
    cell: MarketCap,
  },
  {
    header: 'Circulating Supply',
    accessorKey: 'supply',
    cell: CirculatingSupply,
  },
];
