'use client';

import { useState, useCallback, startTransition } from 'react';
import useWebSocket from 'react-use-websocket';

import { safeParse } from '@/lib/json';
import { toUSD } from '@/lib/number/currency';

import { WS_ENDPOINT_BASE_URL, WS_ENDPOINT_PATH } from '@/constants/endpoints';

interface PriceProps {
  id: string;
  value: string;
}

function Price(props: PriceProps) {
  const { id, value: inital } = props;
  const [value, setValue] = useState(inital);
  const price = parseFloat(value);

  const onOpen = useCallback(() => {
    console.log('connection open');
  }, []);

  const onClose = useCallback(() => {
    console.log('connection closed');
  }, []);

  const onMessage = useCallback(
    (event: WebSocketEventMap['message']) => {
      startTransition(() => {
        const payload = safeParse<Record<string, string>>(event.data);
        if (!payload || !payload[id]) {
          return;
        }
        setValue(payload[id]);
      });
    },
    [id],
  );

  useWebSocket(`${WS_ENDPOINT_BASE_URL}/${WS_ENDPOINT_PATH.PRICES}`, {
    queryParams: {
      assets: id,
    },
    share: true,
    retryOnError: true,
    onOpen: onOpen,
    onClose: onClose,
    onMessage: onMessage,
  });

  return (
    <div className="flex justify-start">
      <span className="text-4xl text-black font-bold">{toUSD(price, 2)}</span>
    </div>
  );
}

export default Price;
