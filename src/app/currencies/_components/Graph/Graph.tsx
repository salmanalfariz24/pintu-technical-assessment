import dynamic from 'next/dynamic';

import { getAssetsHistory } from '@/repository/history/server';
import { getChartData } from '@/repository/history/normalizer';

const Draw = dynamic(() => import('./Draw'), { ssr: false });

interface InformationPropsType {
  id: string;
}

async function Graph(props: InformationPropsType) {
  const { id } = props;
  const data = await getAssetsHistory(id);
  const chartData = getChartData(data);

  return (
    <div className="flex flex-col flex-grow items-center border-2 border-gray-500/100 rounded-lg w-full">
      <Draw data={chartData} />
    </div>
  );
}

export default Graph;
