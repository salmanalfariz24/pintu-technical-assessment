import { Suspense } from 'react';
import { getAssetsByID } from '@/repository/assets/server';
import { normalizeSingleAsset } from '@/repository/assets/normalizer';

import Main from '@/components/atoms/Main';

import type { AssetDataType } from '@/model/assets';

import Information from '../_components/Information';
import Graph from '../_components/Graph';

interface PagePropsType {
  params: {
    id: string;
  };
}

const MOCK: AssetDataType = {
  id: 'bitcoin',
  rank: 1,
  symbol: 'BTC',
  name: 'Bitcoin',
  price: '63823.9307508367016017',
  detailURL: '/currencies/bitcoin',
  marketCap: '1259081551796.6017147481102157',
  supply: '19727421.0000000000000000',
  maxSupply: '21000000.0000000000000000',
  changePercentage: '-0.9925573213666201',
};

async function Page(props: PagePropsType) {
  const { params } = props;
  // const data = await getAssetsByID(params.id);
  // const assets = normalizeSingleAsset(data);

  return (
    <Main className="flex justify-center mt-3" padding="dense">
      <div className="flex flex-row w-full h-full gap-3">
        <Information {...MOCK} />
        <Suspense>
          <Graph id={MOCK.id} />
        </Suspense>
      </div>
    </Main>
  );
}

export default Page;
