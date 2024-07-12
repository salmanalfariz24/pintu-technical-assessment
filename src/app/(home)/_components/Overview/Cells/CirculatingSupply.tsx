'use client';

import type { CellContext } from '@tanstack/react-table';

import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import strconv from '@/lib/string/strconv';
import { toDigits } from '@/lib/number/currency';
import { cn } from '@/lib/utils';

import type { AssetDataType } from '@/model/assets';

function CirculatingSupply(props: CellContext<AssetDataType, unknown>) {
  const { row } = props;
  const symbol = row.original.symbol;

  const maxSupply = strconv.ParseFloat(row.original.maxSupply);
  const supply = strconv.ParseFloat(row.getValue<string>('supply'));

  const capped = maxSupply === 0 || supply === maxSupply;
  const percentage = !capped ? parseFloat(Number((supply / maxSupply) * 100).toFixed(2)) : 0;

  const TriggerWrapper = capped ? 'div' : TooltipTrigger;

  return (
    <TooltipProvider>
      <Tooltip>
        <TriggerWrapper className={cn('flex flex-col', { 'w-full': !capped })}>
          <div className={cn('flex items-center w-full', { 'mb-1': !capped })}>
            <div className="font-medium">
              {toDigits(supply)} {symbol}
            </div>
          </div>
          {!capped ? (
            <div className="flex items-center w-full">
              <Progress className="h-1" value={percentage} />
            </div>
          ) : null}
          {!capped ? (
            <TooltipContent>
              <div className="flex flex-col p-2 text-xs">
                <div className="flex flex-row items-center mb-2">
                  <div className="flex-auto mr-40">
                    <span className="font-semibold">Percentage</span>
                  </div>
                  <div className="flex-shrink-0 flex-grow-0">
                    <span className="text-gray-400">{percentage}%</span>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  <Progress className="h-1" value={percentage} />
                </div>
                <div className="flex flex-row items-center mb-2">
                  <div className="flex-auto mr-40">
                    <span className="font-semibold">Circulating Supply</span>
                  </div>
                  <div className="flex-shrink-0 flex-grow-0">
                    <span className="text-gray-400">
                      {toDigits(supply)} {symbol}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center mb-2">
                  <div className="flex-auto mr-40">
                    <span className="font-semibold">Max Supply</span>
                  </div>
                  <div className="flex-shrink-0 flex-grow-0">
                    <span className="text-gray-400">
                      {toDigits(maxSupply)} {symbol}
                    </span>
                  </div>
                </div>
              </div>
            </TooltipContent>
          ) : null}
        </TriggerWrapper>
      </Tooltip>
    </TooltipProvider>
  );
}

export default CirculatingSupply;
