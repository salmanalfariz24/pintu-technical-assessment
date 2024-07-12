export const ENDPOINT_BASE_URL = String(process.env.NEXT_PUBLIC_COIN_CAP_API);

export const WS_ENDPOINT_BASE_URL = String(process.env.NEXT_PUBLIC_COIN_CAP_WS);

export const ENDPOINT_PATH = {
  GET_ASSETS: '/assets',
  GET_HISTORY: '/assets/{id}/history',
};

export const WS_ENDPOINT_PATH = {
  PRICES: 'prices',
};
