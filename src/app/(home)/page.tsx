import { getAssets } from '@/repository/assets/server';
import { normalizeAssetsCollections } from '@/repository/assets/normalizer';

import Main from '@/components/atoms/Main';

import Overview from './_components/Overview';

async function Home() {
  const data = await getAssets();
  const { assets } = normalizeAssetsCollections(data);

  return (
    <Main>
      <Overview assets={assets} />
    </Main>
  );
}

export default Home;
