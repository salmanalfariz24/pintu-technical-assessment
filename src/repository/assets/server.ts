import { ENDPOINT_BASE_URL, ENDPOINT_PATH } from '@/constants/endpoints';

import { APIError } from '@/lib/error';

export async function getAssets() {
  const requestURL = `${ENDPOINT_BASE_URL}${ENDPOINT_PATH.GET_ASSETS}`;
  const http = await fetch(requestURL, {
    method: 'GET',
  });

  const json = await http.json();
  if (!json && http.status >= 400 && http.status < 500) {
    throw new Error(`[${http.status}] ${http.statusText}`);
  } else if (http.status >= 400) {
    throw new APIError(`[${http.status}] ${http.statusText}`, json);
  }
  return json;
}

export async function getAssetsByID(id: string) {
  const requestURL = `${ENDPOINT_BASE_URL}${ENDPOINT_PATH.GET_ASSETS}/${id}`;
  const http = await fetch(requestURL, {
    method: 'GET',
  });

  const json = await http.json();
  if (!json && http.status >= 400 && http.status < 500) {
    throw new Error(`[${http.status}] ${http.statusText}`);
  } else if (http.status >= 400) {
    throw new APIError(`[${http.status}] ${http.statusText}`, json);
  }
  return json;
}
