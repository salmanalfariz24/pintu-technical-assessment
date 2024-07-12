'use client';

import Link from 'next/link';

import type { CellContext } from '@tanstack/react-table';

import type { AssetDataType } from '@/model/assets';

function Name(props: CellContext<AssetDataType, unknown>) {
  const { row } = props;
  const name = row.getValue<string>('name');
  return (
    <Link href={row.original.detailURL} className="flex">
      <div className="flex flex-row items-center">
        <p className="font-semibold leading-6">{name}</p>
        <p className="text-gray-400 leading-6 ms-2">{row.original.symbol}</p>
      </div>
    </Link>
  );
}

export default Name;
