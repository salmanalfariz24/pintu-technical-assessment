import { Suspense } from 'react';
import { getAssetsByID } from '@/repository/assets/server';
import { normalizeSingleAsset } from '@/repository/assets/normalizer';

import Main from '@/components/atoms/Main';

import Information from '../_components/Information';
import Graph from '../_components/Graph';

interface PagePropsType {
  params: {
    id: string;
  };
}

async function Page(props: PagePropsType) {
  const { params } = props;
  const data = await getAssetsByID(params.id);
  const assets = normalizeSingleAsset(data);

  return (
    <Main className="flex justify-center mt-3" padding="dense">
      <div className="flex flex-row w-full h-full gap-3">
        <Information {...assets} />
        <Suspense>
          <Graph id={assets.id} />
        </Suspense>
      </div>
    </Main>
  );
}

export default Page;
