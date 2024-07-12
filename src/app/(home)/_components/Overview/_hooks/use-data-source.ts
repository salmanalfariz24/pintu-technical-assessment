import { useCallback, startTransition } from 'react';
import { useImmer } from 'use-immer';
import useWebSocket from 'react-use-websocket';

import { safeParse } from '@/lib/json';

import { WS_ENDPOINT_BASE_URL, WS_ENDPOINT_PATH } from '@/constants/endpoints';
import type { AssetCollectionDataType } from '@/model/assets';

const useDataSource = (initial: AssetCollectionDataType['assets']) => {
  const [data, update] = useImmer(initial);

  const onOpen = useCallback(() => {
    console.log('connection open');
  }, []);

  const onClose = useCallback(() => {
    console.log('connection closed');
  }, []);

  const onMessage = useCallback(
    (event: WebSocketEventMap['message']) => {
      const payload = safeParse<Record<string, string>>(event.data);
      if (!payload) {
        return;
      }

      startTransition(() => {
        const keys = Object.keys(payload);
        update(draft => {
          for (const key of keys) {
            const target = draft.find(v => v.id === key);
            if (target) {
              target.price = payload[key];
            }
          }
        });
      });
    },
    [update],
  );

  useWebSocket(`${WS_ENDPOINT_BASE_URL}/${WS_ENDPOINT_PATH.PRICES}`, {
    queryParams: {
      assets: 'ALL',
    },
    share: true,
    retryOnError: true,
    onOpen: onOpen,
    onClose: onClose,
    onMessage: onMessage,
  });

  return data;
};

export default useDataSource;
