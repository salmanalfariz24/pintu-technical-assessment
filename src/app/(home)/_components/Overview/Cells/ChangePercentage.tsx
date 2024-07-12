'use client';

import type { CellContext } from '@tanstack/react-table';

import { ChevronDown, ChevronUp } from 'lucide-react';

import { cn } from '@/lib/utils';

import type { AssetDataType } from '@/model/assets';

function ChangePercentage(props: CellContext<AssetDataType, unknown>) {
  const { row } = props;
  const value = row.getValue<string>('changePercentage');

  const parsed = parseFloat(value);
  const isNegative = parsed < 0;

  const Icon = isNegative ? ChevronDown : ChevronUp;

  return (
    <div className={cn('flex flex-row items-center', { 'text-red-500': isNegative, 'text-green-500': !isNegative })}>
      <Icon className="size-5 text-inherit" />
      <p className="text-inherit font-semibold leading-6 ms-1">{Math.abs(parsed).toFixed(2)}%</p>
    </div>
  );
}

export default ChangePercentage;
