import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import strconv from '@/lib/string/strconv';
import { toDigits, toUSD } from '@/lib/number/currency';

import type { AssetDataType } from '@/model/assets';

import Price from './Price';

interface InformationPropsType extends AssetDataType {}

function Information(props: InformationPropsType) {
  const { id, name, symbol, price, rank, marketCap, supply, maxSupply } = props;
  const supplyFormatted = toDigits(strconv.ParseFloat(supply));
  const maxSupplyFormatted = toDigits(strconv.ParseFloat(maxSupply));
  const marketCapFormatted = toUSD(strconv.ParseFloat(marketCap));

  return (
    <div className="flex">
      <Card className="min-w-[300px]">
        <CardHeader>
          <CardTitle>
            <div className="flex flex-row items-baseline flex-wrap gap-1">
              <div className="flex text-lg font-bold">{name}</div>
              <div className="flex text-xs text-gray-500">{symbol}</div>
              <div className="flex text-4xl	flex-grow justify-end text-black">#{rank}</div>
            </div>
          </CardTitle>
          <CardDescription>
            <Price id={id} value={price} />
          </CardDescription>
        </CardHeader>
        <CardContent className="text-xs">
          <div className="flex flex-row items-center flex-wrap gap-1 mb-4">
            <div className="flex text-gray-500">Market cap</div>
            <div className="flex font-bold flex-grow justify-end text-black">{marketCapFormatted}</div>
          </div>
          <div className="flex flex-row items-center flex-wrap gap-1 mb-4">
            <div className="flex text-gray-500">Circulating supply</div>
            <div className="flex font-bold flex-grow justify-end text-black">
              {supplyFormatted} {symbol}
            </div>
          </div>
          <div className="flex flex-row items-center flex-wrap gap-1 mb-4">
            <div className="flex text-gray-500">Max. supply</div>
            <div className="flex font-bold flex-grow justify-end text-black">
              {maxSupplyFormatted} {symbol}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Information;
