'use client';

import { useState } from 'react';
import Chart from 'react-apexcharts';

import { ChartDataType } from '@/model/history';

interface DrawPropsType {
  data: ChartDataType[];
}

const options: any = {
  chart: {
    type: 'candlestick',
    height: 1000,
  },
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
};

function Draw(props: DrawPropsType) {
  const { data } = props;
  const [series] = useState(() => {
    return [{ data: data.map(value => ({ ...value, x: new Date(value.x) })) }];
  });

  return <Chart series={series} options={options} type="candlestick" width="1000" />;
}

export default Draw;
